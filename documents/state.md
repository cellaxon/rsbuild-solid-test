정적(static)으로 배포한 Solid 애플리케이션은 **서버에 상태를 보관하지 않고**, 클라이언트에서 상태를 관리하기 때문에 배포 방식(정적 vs. 서버 기반)과 상태 저장(애플리케이션 상태·세션 상태·영속 상태)은 **본질적으로 분리**되어 있습니다.

***

## 1. 정적 배포의 역할

- 정적 배포는 **HTML·JS·CSS 자산**을 빌드 시점에 생성해 CDN 등에서 그대로 서빙하는 방식입니다.
- 서버 측에서 렌더링하거나 실행할 로직이 없으므로, 상태를 저장하거나 유지하는 기능은 포함되지 않습니다.

## 2. 상태 저장 책임은 클라이언트 또는 백엔드

1. **클라이언트 단 영속 상태**  
   - Solid의 `createSignal`, `createStore` 등으로 관리되는 상태는 **브라우저 메모리**에 존재합니다.  
   - 새로고침 시 초기화되므로, 세션 유지가 필요하면 로컬 스토리지(LocalStorage), 세션 스토리지(SessionStorage), IndexedDB 등에 저장·복원 로직을 구현해야 합니다.  

2. **백엔드 세션·DB 기반 상태**  
   - 로그인 정보, 사용자 설정 같은 값을 **안전하게 보관**하려면 API 서버에 세션 또는 데이터베이스에 저장해야 합니다.  
   - 클라이언트는 rsbuild로 빌드된 정적 자산을 서빙만 담당하고, 상태는 API 호출로 가져오거나 저장합니다.

## 3. 실습 예시: 로컬 스토리지 활용

```jsx
import { createSignal, onMount } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  // 마운트 시 로컬스토리지에서 복원
  onMount(() => {
    const saved = localStorage.getItem('count');
    if (saved) setCount(Number(saved));
  });

  // 상태 변경 시 저장
  const increment = () => {
    setCount(c => c + 1);
    localStorage.setItem('count', String(count() + 1));
  };

  return (
    <div>
      <p>Count: {count()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

- 이처럼 정적 자산은 **어디에 배포해도** 동일하게 동작하며, 상태의 **영속성은 브라우저 저장소 또는 외부 API**에 위임해야 합니다.

***

## 결론

- **정적 배포 여부와 상태 저장 메커니즘은 별개**입니다.  
- 서버가 없기 때문에 상태를 장기 보존하려면 클라이언트 저장소(localStorage, IndexedDB 등)나 별도의 백엔드 API를 활용해야 합니다.  
- Solid 애플리케이션은 정적으로 배포해도 클라이언트 상태 관리를 위한 모든 로직은 동일하게 적용됩니다.
- 