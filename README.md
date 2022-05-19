## 영화 검색하는 프로젝트

## 개요

- 목표 : CRA 를 사용하지 않고 react 프로젝트 설정하기, 테스트코드 작성하기
- 사용 기술: react, recoil webpack, tailwind, jest
- 기능
  - 검색
  - 필터링
  - 무한스크롤

## 세부내용

- TMDB(영화, TV 컨텐츠 데이터를 제공하는 무료 api)를 이용해서 개발 해보았다.
- 제한사항 & 어려웠던 점

  - api

    - api 에서 원하는 기능이 없음(제목으로만 검색가능)
      - 필터링 해주는 api 가 없음
      - 정렬 api가 없음
    - 받아온 데이터에 사진, 제목, 비디오, 이미지가 없는 데이터가 너무 많음

  - 무한스크롤
    - React.suspense 를 사용해서 로딩을 처리해보았다.
      - 단점 : suspense의 자식 컴포넌트는 계속 재 랜더링됨.
      - 장점 : 코드 작성이 편함.
    - Recoil Loadable 방식으로 처리해 보았다.
      - 단점 : 일괄 데이터 처리가 어렵다(loadable 데이터는 hasValue 상태가 되야 처리 할 수 있음)
      - 장점 : recoil selector의 코드를 많이 줄일 수 있다.
    - 필터링 된 데이터의 무한스크롤 구현의 어려움
      - api 에 필터링 기능이 없어서
      - 어떤식으로 필터링 된 데이터의 무한스크롤을 구현 해야 할지 고민을 하게됨

- 해결방법
  - api
    - 최대한 양호한 데이터가 들어가 있는 api 만 사용함(popular, detail, video api 만 사용)
    - 정렬 기능은 구현하지 않음(정렬 된 채로 데이터가 오지 않으므로 무한스크롤 시 성능상 문제가 생김)
    - 정렬 외 필터링 기능은 프론트앤드에서 자체적으로 필터링
      - 매칭되지 않는 데이터는 블러 효과로 처리 하고,
      - 사용자가 제외 하거나 그대로 두거나 선택 할 수 있게 함.
  - 무한스크롤
    - id 만 얻어와서 만든 배열로
      - map 으로 각 자식 컴포넌트에 id 만 전달해 주고
      - 각 자식컴포넌트에서 id 를 갖고 각각 통신 해서 데이터를 그려주는 방식
    - 다양한 api 사용(popular:id 획득용도, detail: id로 데이터 얻어오는 용도)
    - loadable 방법으로 작성(다시 랜더링 되지 않는 방식)
    - 대신 데이터 필터링은 각각 최 하위 자식 컴포넌트에서 처리

## 새로 알게된 것 정리

### 설치

- eslint 설정은 npx eslint --init 가 가장 쉽다.
- test 환경 설정도 npx jest --init 가 가장 쉽다.
- tailwind 설정은 postcss 로 하고, postcss, autoprefixer, 를 설치하고 postcss-loader 을 웹팩에 넣어주면 된다.
- tailwind 에서 css 는 굳이 purge 를 해줄 필요가 없다 알아서 퍼지 한다(어처피 안쓰는 기능은 없음 스타일을 적어줘야 작동하므로 클레스 방식).
- test 환경에서 절대경로 사용하려면 jest.config.ts 에서 moduleNameMapper 설정해야한다.
  ```
  moduleNameMapper: {
  '@hooks(.*)$': '<rootDir>/src/hooks$1',
  '@utils(.*)$': '<rootDir>/src/utils$1',
  '@components(.*)$': '<rootDir>/src/components$1',
  '@pages(.*)$': '<rootDir>/src/pages$1',
  },
  ```
- 아쉽게도 test 환경에서 import React from 'react'; 를 생략 하는 방법은 아직 못찾았다 대신 웹팩에서 provider 플러그인으로 가능하게 할 수 있다만.. 테스트를 해야해서 별 쓸모가 없는것 같다.

- ts-loader 를 사용하면 타입검사를 다 해서 빌드 속도가 느리나
- babel-loader 를 사용하고 옵션에 presets 에 @babel/typeacript 를 넣어주면 타입 검사를 안하므로 빌드 속도가 빨라진다.

  ```
    //.babelrc.json
    {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
  }

  ```
