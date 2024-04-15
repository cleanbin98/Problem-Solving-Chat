# 특징 및 환경 설정
  - 환경 설정
      1. nest로 프로젝트를 생성하고 게이트웨이를 설치한다. 그리고 양방향 통신을 위한 웹소켓 패키지 파일들을 추가로 설치한다. (npm 명령어)
      2. 프로젝트가 생성되었으면 필요없는 파일들을 삭제한다. (test 디렉토리, app.controller.spec.ts) → 삭제하지 않으면 Hello world!가 출력됌.
  - 파일 구조
      1. chat.gateway.ts : 게이트웨이 즉, 서비스 기능(클라이언트 메세지를 서버에서 읽을 수 있도록 데이터 가공)을 위해 nest로 설치한 chat 파일이다.
      2. app.module.ts : nest 프로젝트에서 실행을 위한 파일 모듈들을 등록하는 파일이다.
      3. main.ts : 서버가 실행되면 가장 먼저 실행되는 파일로 app.module.ts파일과 정적 파일 경로를 지정한다.
      4. index.html : 클라이언트 영역 템플릿이다.
      5. script.js : index.html에서 jquery 기능을 위해 따로 분리한 스크립트 코드로, chat.gateway.ts에서 가공된 메세지 데이터를 컨트롤링한다.(컨트롤러)
