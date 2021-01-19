# nextJS serverless

## 미리보기
* [https://d1icf8x52kpo78.cloudfront.net](https://d1icf8x52kpo78.cloudfront.net)
* [https://d1icf8x52kpo78.cloudfront.net/ssr](https://d1icf8x52kpo78.cloudfront.net/ssr)
* [https://d1icf8x52kpo78.cloudfront.net/slug](https://d1icf8x52kpo78.cloudfront.net/slug)

## 개발 스택

- nextJS
- typescript
- eslint + prettier
- lint-staged (pre-commit hook)

## 필요합니다

- NodeJS 12.x
- AWS CLI

## 가능한 기능
- [x] 기본적인 nextJS의 기능들
- [x] 서버 사이드 렌더링

## 아키텍처

![Architecture](https://github.com/serverless-nextjs/serverless-next.js/raw/master/img/arch_no_grid.png)

## How To run

###### 의존성 설치
```bash
yarn
```

###### 개발 서버 실행
```bash
yarn run dev
```

###### lint 실행
```bash
# 오류 보기
yarn lint

# 오류 고치기
yarn lint:fix

# prettier 적용하기
yarn lint:prettier
```

###### serverless 디플로이
```bash
yarn deploy
```

## [FAQ](https://github.com/serverless-nextjs/serverless-next.js#my-lambda-is-deployed-to-us-east-1-how-can-i-deploy-it-to-another-region)

###### [deploy 된 lambda의 region을 바꿀 수 있나요?](https://github.com/serverless-nextjs/serverless-next.js#my-lambda-is-deployed-to-us-east-1-how-can-i-deploy-it-to-another-region)
serverless NextJS는 region이 없습니다 (regionless) 서버리스 어플리케이션은 모든 cloudfront edge location에 배포되며,
람다는 us-east-1 (버지니아 북부)에 배포된 것처럼 보일수 있으나, 다른 region에 모두 배포됩니다.

###### Source

- [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js#readme)
- [리액트 프로젝트에 ESLint 와 Prettier 끼얹기](https://velog.io/@velopert/eslint-and-prettier-in-react)
