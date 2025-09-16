React 프로젝트(TanStack Start)와 Solid 프로젝트(rsbuild) 정적 빌드 배포 시 기능 비교를 정리해드리겠습니다.

## React 프로젝트 (TanStack Start) 정적 배포

### 사용 가능한 기능
- **정적 프리렌더링**: 빌드 시점에 HTML 파일을 미리 생성[1]
- **파일 기반 라우팅**: Next.js와 유사한 자동 라우팅 시스템[1]
- **클라이언트 사이드 라우팅**: TanStack Router를 통한 SPA 라우팅[2]
- **정적 자산 처리**: 이미지, 폰트, CSS 등 정적 파일 최적화
- **코드 분할**: 자동 번들 스플리팅과 lazy loading
- **TypeScript 지원**: 완전한 타입 안전성[1]
- **빌드 최적화**: Vite 기반의 빠른 빌드와 HMR[3]

### 사용 불가능한 기능
- **서버 함수**: 정적 환경에서는 서버 로직 실행 불가[4]
- **API 라우트**: 서버 엔드포인트 제공 불가
- **실시간 SSR**: 런타임 서버 렌더링 불가
- **동적 데이터 fetching**: 빌드 시점에 미리 정의되지 않은 동적 라우트 처리 제한
- **서버 측 인증**: 서버 기반 세션 관리 불가[4]

***

## Solid 프로젝트 (rsbuild) 정적 배포

### 사용 가능한 기능
- **정적 자산 처리**: 이미지, 폰트, 미디어 파일 최적화 지원[5]
- **모듈 번들링**: JavaScript, TypeScript, CSS 번들링[6]
- **코드 분할**: 자동 청크 분리와 lazy loading
- **SPA 라우팅**: 클라이언트 사이드 라우팅 라이브러리 사용 가능
- **성능 최적화**: Solid의 fine-grained reactivity로 효율적인 렌더링[7][8]
- **TypeScript 지원**: 완전한 타입 안전성[5]
- **빌드 도구 통합**: Rspack 기반의 빠른 빌드[6]

### 사용 불가능한 기능
- **내장 SSR**: rsbuild는 정적 빌드 도구로 SSR 기본 지원 없음
- **파일 기반 라우팅**: 수동 라우터 설정 필요
- **서버 함수**: 정적 환경에서 서버 로직 실행 불가
- **API 엔드포인트**: 서버 라우트 제공 불가
- **자동 프리렌더링**: 수동으로 정적 페이지 생성 필요

***

## 비교 요약

| 항목 | TanStack Start | Solid + rsbuild |
|------|----------------|-----------------|
| 파일 기반 라우팅 | ✅ 자동 지원 | ❌ 수동 설정 필요 |
| 정적 프리렌더링 | ✅ 내장 기능 | ❌ 별도 구현 필요 |
| 성능 | 🟡 Virtual DOM 오버헤드 | ✅ Fine-grained reactivity |
| 번들 사이즈 | 🟡 상대적으로 큰 편 | ✅ 작은 번들 사이즈[8] |
| 개발 생태계 | ✅ 풍부한 생태계 | 🟡 상대적으로 작은 생태계[8] |
| 학습 곡선 | 🟡 중간 정도 | ✅ 상대적으로 쉬움[7] |

두 프로젝트 모두 정적 배포 시에는 **서버 기능을 사용할 수 없으며**, 클라이언트 사이드 기능에 집중해야 합니다. TanStack Start는 더 많은 내장 기능을 제공하지만, Solid + rsbuild는 더 가볍고 성능이 우수한 대안입니다.[8][5][1]

[1](https://tanstack.com/start/latest/docs/framework/react/static-prerendering)
[2](https://github.com/TanStack/router/discussions/3394)
[3](https://crystallize.com/blog/react-static-site-generators)
[4](https://www.answeroverflow.com/m/1390647041423704094)
[5](https://rsbuild.rs/guide/basic/static-assets)
[6](https://rsbuild.rs/guide/start/)
[7](https://www.dhiwise.com/post/solidjs-vs-react-making-the-right-choice-for-your-next-project)
[8](https://codeparrot.ai/blogs/solidjs-vs-react-a-comprehensive-comparison)
[9](https://v0.rsbuild.dev/guide/basic/static-assets)
[10](https://www.scalekit.com/blog/react-vs-solid-reactivity-experience-performance)
[11](https://dev.to/lexlohr/deploy-a-solid-start-app-on-github-pages-2l2l)
[12](https://tanstack.com/start/latest/docs/framework/react/hosting)
[13](https://www.aalpha.net/blog/solidjs-vs-react-comparison/)
[14](https://bejamas.com/hub/tutorials/practical-guide-to-solidjs-library)
[15](https://www.squareboat.com/blog/solidjs-vs-react)
[16](https://www.reddit.com/r/reactjs/comments/1lsxico/seeking_advice_on_choosing_between_nextjs_and/)
[17](https://github.com/solidjs/solid/issues/264)
[18](https://www.reddit.com/r/webdev/comments/xlnwjo/benefits_of_building_static_content_sites_using/)
[19](https://tanstack.com/router/latest/docs/framework/react/overview)
[20](https://github.com/solidjs/solid/discussions/416)
[21](https://ko.react.dev/blog/2025/02/14/sunsetting-create-react-app)
[22](https://www.reddit.com/r/react/comments/1is95th/why_do_you_need_a_whole_framework_with_back_end/)
[23](https://www.reddit.com/r/reactjs/comments/1k46gwg/is_nextjs_still_worth_it_vercels_control_ssr_push/)

