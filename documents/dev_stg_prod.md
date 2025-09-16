# Solid(rsbuild) 정적 빌드에서 Dev, Stg, Prod 환경 구분하기

Solid(rsbuild) 프로젝트를 정적 사이트로 배포하면서 **개발(dev), 스테이징(stg), 프로덕션(prod)** 환경을 구분하려면, 환경 변수 파일(.env)과 빌드 스크립트를 조합해 각 환경에 맞는 설정을 주입하는 방식이 일반적입니다.

## 1. 환경 변수 파일 구성

프로젝트 루트에 다음과 같이 환경별 `.env` 파일을 준비합니다.  
- `.env.development`  
- `.env.staging`  
- `.env.production`

```dotenv
# .env.development
VITE_API_ENDPOINT=https://api.dev.example.com
VITE_FEATURE_FLAG=true

# .env.staging
VITE_API_ENDPOINT=https://api.stg.example.com
VITE_FEATURE_FLAG=false

# .env.production
VITE_API_ENDPOINT=https://api.example.com
VITE_FEATURE_FLAG=false
```

> Solid(rsbuild) 및 Vite 기반 빌드에서는 `VITE_` 접두사가 붙은 환경 변수만 클라이언트 코드에 주입됩니다.

## 2. 빌드 스크립트 및 패키지 설정

`package.json`에 환경별 빌드 스크립트를 추가합니다. 예를 들어 `cross-env`를 사용해 `NODE_ENV`를 지정하거나, Vite의 `--mode` 옵션을 활용할 수 있습니다.

```jsonc
{
  "scripts": {
    "dev": "rsbuild dev --mode development",
    "build:stg": "rsbuild build --mode staging",
    "build:prod": "rsbuild build --mode production",
    "preview": "rsbuild preview"
  },
  "devDependencies": {
    "cross-env": "^7.0.0"
  }
}
```

- `--mode` 옵션은 Vite가 `.env.[mode]` 파일을 자동으로 로드하도록 합니다.  
- `rsbuild dev`는 개발 서버, `rsbuild build`는 정적 파일 빌드를 실행합니다.

## 3. 코드 내 환경 변수 사용 예

Solid 컴포넌트나 유틸 파일에서 `import.meta.env`로 환경 변수를 읽어 사용합니다.

```ts
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
const featureFlag = import.meta.env.VITE_FEATURE_FLAG === 'true';

fetch(`${apiEndpoint}/users`)
  .then(res => res.json())
  .then(data => console.log(data));
```

## 4. 배포 흐름 예시

1. **개발**:  
   `$ npm run dev`  
   → `.env.development` 로딩, 개발 서버 실행  

2. **스테이징 빌드**:  
   `$ npm run build:stg`  
   → `.env.staging` 로딩, `build/` 폴더에 정적 파일 생성  

3. **프로덕션 빌드**:  
   `$ npm run build:prod`  
   → `.env.production` 로딩, `build/` 폴더에 최적화된 정적 파일 생성  

4. **배포**:  
   - 생성된 `build/` 폴더를 S3, Netlify, CloudFront, GitHub Pages 등에 업로드  

***

이렇게 **`.env` 파일 + `--mode` 옵션**을 조합해 각 환경에 맞는 설정을 빌드시점에 주입하면, Solid(rsbuild) 정적 배포 시 dev, stg, prod를 깔끔하게 구분해서 운영할 수 있습니다.