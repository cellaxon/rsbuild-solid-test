# Solid 정적 빌드 환경에서 서버 API 호출 시 로그인 정보 전달 방법

Solid 프로젝트를 rsbuild 등으로 정적 빌드하여 배포할 때, 클라이언트에서 서버 API에 로그인 정보를 포함해 인증 요청을 수행하려면 **토큰 보관 방식**과 **요청 시 자격 증명 전송 방식**을 적절히 설계해야 합니다.

***

## 1. 로그인 정보 저장 방식 선택

1. 쿠키(Cookie)  
   -  브라우저가 자동으로 쿠키를 서버에 전송  
   -  `HttpOnly`, `Secure`, `SameSite` 옵션을 통해 XSS·CSRF 공격에 강력  
   -  서버 측에서 로그인 세션을 관리하는 전통적 방식  

2. 로컬 스토리지(LocalStorage) 또는 세션 스토리지(SessionStorage)  
   -  JavaScript에서 토큰(JWT 등)을 읽고 쓸 수 있어 구현 간단  
   -  XSS 공격에 취약하므로, 민감한 정보 저장 시 주의  
   -  CSRF 보호는 추가 헤더(CORS, CSRF 토큰)로 처리  

***

## 2. API 호출 시 로그인 정보 포함 방법

### 2.1. 쿠키 사용 + `fetch`로 자동 전송  
1. 서버가 로그인 성공 시 응답 헤더에 `Set-Cookie: session=…; HttpOnly; Secure; SameSite=Strict` 설정  
2. 클라이언트 `fetch` 호출 시 `credentials: 'include'` 또는 `credentials: 'same-origin'` 설정  
```js
fetch('/api/protected', {
  method: 'GET',
  credentials: 'include',  // 쿠키 자동 전송
})
```

- **장점**  
  -  JavaScript로 토큰을 노출하지 않음  
  -  브라우저가 자동으로 쿠키를 관리  

- **유의사항**  
  -  배포 도메인과 API 도메인이 다르면 CORS 설정에서 `Access-Control-Allow-Credentials: true` 및 `Access-Control-Allow-Origin`에 정확한 도메인을 설정해야 함  
  -  SameSite 정책에 따라 서브도메인 호출 시 동작 검증  

### 2.2. 토큰 기반(LocalStorage) + Authorization 헤더  
1. 로그인 시 서버가 JWT 토큰을 JSON 응답에 포함  
2. 클라이언트에서 `localStorage.setItem('token', jwt)` 저장  
3. API 호출 시 헤더에 `Authorization: Bearer <token>` 추가  
```js
const token = localStorage.getItem('token');
fetch('/api/protected', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
})
```

- **장점**  
  -  도메인이 다른 API 서버에도 손쉽게 토큰 전달 가능  
  -  CSRF 공격에 상대적으로 안전(토큰을 헤더에 직접 명시)  

- **유의사항**  
  -  XSS 취약점에 대비해 CSP(Content Security Policy) 설정 권장  
  -  토큰 탈취 시 위험이 크므로, 짧은 유효기간과 리프레시 토큰 전략 사용  

***

## 3. 권장 아키텍처 및 보안 팁

- **쿠키 방식 우선**: 민감 정보는 `HttpOnly` 쿠키에 저장하여 XSS 노출을 최소화  
- **CORS 설정 주의**: 서로 다른 도메인간 API 호출 시 `credentials` 옵션과 서버 측 CORS 헤더(`Allow-Credentials`, `Allow-Origin`)를 반드시 구성  
- **HTTPS 사용**: 모든 요청은 HTTPS로 암호화하여 중간자 공격 보호  
- **토큰 관리**: 리프레시 토큰 및 액세스 토큰 분리, 짧은 유효기간과 자동 갱신 로직 구현  
- **보안 헤더 적용**: CSP, HSTS, X-Frame-Options 등 보안 헤더 추가  

***

정적 빌드 환경에서도 위 두 가지 방식을 사용하여 클라이언트가 서버 API 호출 시 로그인 정보를 안전하게 포함시킬 수 있습니다.

