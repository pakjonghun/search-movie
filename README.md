## 영화 검색하는 프로젝트

## 개요

-   목표 : cra 를 사용하지 않고 react 프로젝트 설정하기, TDD 방식으로 개발하기
-   사용 기술: react, webpack, tailwind, jest
-   기능
    -   제목, 날짜, 평점, 장르별 검색
    -   검색 종류별 보기 편한 테이블 출력
    -   제목, 날짜, 평점, 장르별 정렬 기능
    -   영화 세무 내용 출력

## 새로 알게된 것 정리

-   eslint 설정은 npx eslint --init 가 가장 쉽다.
-   tailwind 설정은 postcss 로 하고, postcss, autoprefixer, 를 설치하고 postcss-loader 을 웹팩에 넣어주면 된다.
-   tailwind 에서 css 는 굳이 purge 를 해줄 필요가 없다 알아서 퍼지 한다(어처피 안쓰는 기능은 없음 스타일을 적어줘야 작동하므로 클레스 방식).
