
# CORS 설정: 백엔드에서 처리하는 방법

CORS 설정은 **백엔드(서버)에서 해야 합니다**. 브라우저의 CORS 정책에 의해 발생하는 문제이므로, 서버가 허용할 출처(origin)를 응답 헤더에 명시해야 합니다.[1][2][3]

## CORS가 필요한 이유

브라우저는 보안을 위해 **Same Origin Policy**(동일 출처 정책)를 적용합니다. 프론트엔드(localhost:3000)와 백엔드(localhost:8080)처럼 **포트가 다르면 다른 출처로 간주**되어 기본적으로 요청을 차단합니다.[4][1]

***

## 백엔드 CORS 설정 방법

### 1. Node.js/Express 환경

**CORS 패키지 설치**
```bash
npm install cors
npm install @types/cors  # TypeScript 사용 시
```

**기본 설정 (모든 출처 허용)**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 모든 출처 허용
```

**특정 출처만 허용 (권장)**
```javascript
const corsOptions = {
  origin: 'http://localhost:3000',  // 프론트엔드 주소
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // 쿠키 전송 허용
};

app.use(cors(corsOptions));
```

### 2. Spring Boot 환경

**WebConfig 클래스 생성**
```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

***

## credentials: true 사용 시 주의사항

쿠키나 인증 헤더를 포함한 요청을 보낼 때는 **프론트엔드와 백엔드 모두 설정**이 필요합니다.[5][6]

### 프론트엔드 설정
```javascript
// fetch 사용 시
fetch('/api/data', {
  method: 'GET',
  credentials: 'include'  // 쿠키 포함
});

// axios 사용 시
axios.get('/api/data', {
  withCredentials: true  // 쿠키 포함
});
```

### 백엔드 설정
```javascript
const corsOptions = {
  origin: 'http://localhost:3000',  // 반드시 정확한 도메인 명시 (와일드카드 * 불가)
  credentials: true
};

app.use(cors(corsOptions));
```

**중요**: `credentials: true` 사용 시 `origin`에 와일드카드(`*`) 사용 불가하며, 정확한 도메인을 명시해야 합니다.[6][7]

***

## 보안을 위한 권장사항

1. **특정 출처만 허용**: `origin: '*'` 대신 정확한 도메인 명시
2. **필요한 메소드만 허용**: `allowedMethods`로 HTTP 메소드 제한
3. **HTTPS 사용**: 프로덕션에서는 HTTPS 필수
4. **최소 권한 원칙**: 필요한 헤더와 메소드만 허용

***

## 요약

| 설정 위치 | 역할 | 설정 내용 |
|-----------|------|-----------|
| **백엔드** | CORS 정책 허용 | `Access-Control-Allow-Origin` 등 응답 헤더 설정 |
| 프론트엔드 | 인증 정보 포함 | `credentials: 'include'` 또는 `withCredentials: true` |

**CORS 설정은 반드시 백엔드에서 하며**, 프론트엔드는 쿠키나 인증 정보를 포함해야 할 때만 추가 설정이 필요합니다.[2][3][1]

[1](https://sdardew-valley.tistory.com/150)
[2](https://velog.io/@minyoung_/Node.js%EC%97%90%EC%84%9C-CORS-%ED%97%88%EC%9A%A9-%EC%84%A4%EC%A0%95)
[3](https://brightstarit.tistory.com/37)
[4](https://www.kyumin.blog/7)
[5](https://www.inflearn.com/community/questions/1354044/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-credentials-include%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%9C%EA%B2%BD%EC%9A%B0-cors-%EB%AC%B8%EC%A0%9C)
[6](https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-CORS-%EC%BF%A0%ED%82%A4-%EC%A0%84%EC%86%A1withCredentials-%EC%98%B5%EC%85%98)
[7](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-CORS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-cors-%EB%AA%A8%EB%93%88)
[8](https://halligalli0.tistory.com/27)
[9](https://khdscor.tistory.com/64)
[10](https://handhand.tistory.com/entry/Nodejs-CORS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
[11](https://velog.io/@garcon/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-CORS%EC%99%80-credentials)
[12](https://www.inflearn.com/community/questions/896182/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-credentials-include%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%9C%EA%B2%BD%EC%9A%B0-cors-%EB%AC%B8%EC%A0%9C)
[13](https://coding-maggot.tistory.com/100)
[14](https://velog.io/@kimbangul/Node.js-CORS-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-With.-TypeScript)
[15](https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/CORS)
[16](https://velog.io/@seungchan__y/CORS-%EC%97%90%EB%9F%AC%EC%99%80-%ED%95%B4%EA%B2%B0%EB%B2%95)
[17](https://danyoujeong.tistory.com/238)
[18](https://moon-works.tistory.com/48)
[19](https://hazzuu.tistory.com/entry/CORS-%EC%8B%A4%EC%8A%B5%ED%95%B4%EB%B3%B4%EA%B8%B0)
[20](https://loosie.tistory.com/114)

