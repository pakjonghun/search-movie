## 영화 검색하는 프로젝트

## 개요

- 목표 : cra 를 사용하지 않고 react 프로젝트 설정하기, TDD 방식으로 개발하기
- 사용 기술: react, webpack, tailwind, jest
- 기능
  - 제목, 날짜, 평점, 장르별 검색
  - 검색 종류별 보기 편한 테이블 출력
  - 제목, 날짜, 평점, 장르별 정렬 기능
  - 영화 세무 내용 출력

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
