- taget:
  - 자바스크립트 출력의 예상 버전
- module : 
  - es6이전의ㅡ 자바스크립트는 표준 모듈 시스템이 없었기 때문에 commonjs, amd, 
  umd, system등과 같은 다양한 모듈 로더가 여러가지 시나리오를 위해 개발되었다.
  - Node.js 애플리케이션이나 npm 패키지를 개발한다면 commonjs.
  - webpack, browerify와 같은 최신 패키징 도구덕분에 commonjs는 브라우저 프로젝트에도 탁월한 선택이 될 수 있다.
- declaration : 
  - 자바스크립트 출력과 함께 .d.ts선언 파일을 생성하려면 활성
  - 배포되는 라이브러리나 프레임워크의 타입정보소스로서 유용하게 사용
  - 컴파일 성능이나 부서간 협업을 향상시키기 위해 큰 프로젝트를 분할하는 데에도 도움된다.
- sourceMap:
  - 컴파일된 자바스크립트와 함께 소스맵 생성 (디버깅시 필요)
- jsx :
  -  타입스크립트는 리액트jsx(.tsx)파일을 기본적으로 지원.
  - 옵션값을 react로 지정하면 타입스크립트 컴파일러는 .tsx파일을 일ㅇ반 자바스크립트 파일로 컴파일 한다.
  - preserve값으로 지정하면 .jsx파일을 생성하므로 다른 jsx컴파일러로 이팔일들을 post-precess할 수 있다.

- noEmitOnError:
  - 타입에러발견 여부와 상관없이 결과를 내보내는 것을 원치 않을 때 true

- noEmitHelplers:
  - 새로운 ECMAScript기능을 하위 대상 버전의 자바스크립트로 컴파일할 때 타입스크립트는 __extends, __awaiter와 같은 도우미 함수를 생성하는데,
  특별한 이유로 자체적 도우미 함수를 작성하고 싶다면 true

- noImplicitAny:
  - 타입스크립트는 자바스크립트의 상위집합(superset)이므로 변수와 파라미터는 타입을 지정하지 않아도 된다.
  - 이 옵션을 활성화하면 변수,파라미터의 타입이 지정되어있지 않고 context도 유추할 수 없는 경우 타입스크립트 컴파일러가 에러를 발생시킨다.

- experimentalDecorators:
  - 데코레이터 사용하기 위한 옵션

- emitDecoratorMetadata:
  - 데코레이터 생성할때 데코레이트된 대상의 타입정보를 포함하는 Reflect.metadata()데코레이터도 같이 생성된다.
- outDir:
  - 컴파일된 js파일의 위치를 컴파일러에게 알려줌
- outFile:
  - 모든 출력을 단일파일로 통합하기 원할때 사용
- rootDir:
  - 소스코드의 루트. 
  - 이 옵션을 생략하면 컴파일러는 소스파일의 가장 긴 공통경로를 루트로 사용한다.
  - 구성하는게 좋음
- preserveConstEnums:
  - 열거형은 타입스크립트가 제공하는 유용한 도구이다.
  - 컴파일되면 Enum.memeber표현식의 형태이다.
  - 반면에 상수열거형은 단순히 숫자형 배열로 작성된다.
  - 기본적으로 타입스크립트는 상수열거형의 정의를 제거하는데, 이 옵션을 활성화하면 열거형의 정의를 유지한다.
- strictNullChecks:
  - undefined나 null과 같은 빈값에 대한 더 철저한 타입검사
- stripInternal:
  - 선언파일을 생성할때 내부적으로 무언가 사용해야하지만, 접근성을 지정하는 좋은 방법이 없는 경우가 있다.
  - 이러한 코드를 /** @internal*/(JSDoc) 으로 주석처리하면 타입스크립트 컴파일러가 이 부분을 선언파일에 내보내지 않는다.
- isolatedModules:
  - 컴파일러가 해결 불가한 파일은 무조건 가져온다.

https://www.typescriptlang.org/docs/handbook/compiler-options.html