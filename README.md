<h1> 이미지 슬라이더 - 장동건 </h1>
 <h2> 개발기간 </h2>
 Version 0.0.1 : 2023년 3월 10일 ~ 2023년 3월 15일
 
 <h2> 개발목적 </h2>
 React 개발과정을 습득하기 위해 간단한 이미지 슬라이더 만들기
 이미지 슬라이더의 작동방식을 이해하고, 다양한 이미지 슬라이더 분석하기 
 
 <h2> 사용한 기술 </h2>
 리액트, styled-components
 
 <h2> 사용한 확장 프로그램(VS Code) </h2>
 vscode-styled-components : styled-components로 된 코드에 하이라이트와 에러제공 및 자동문법 기능 제공
 Styled-Components Extractor : 파일 내에서 styled-components에서 import되지 않은 컴포넌트를 추출해 파일을 만들고 임포트 해온다.
 Reactjs code snippets : 반복적인 리액트 파일을 만들때 축약어로 기본 형식의 파일을 만든다.
 Auto Rename Tag : 태그의 시작과 끝에서 이름을 동시에 바꿔준다.
 
 
 <h2> 개발 진행 순서 </h1>
  <ol>
   <li> 요구사항 정의하기 </li>
   <li> 요구사항 분석하기 </li>
   <li> 기능 단위로 나누고 큰 틀 만들기 </li>
   <li> 세부 기능에서 구조 만들기 (component, state, props, hooks ) </li>
   <li> 세부 기능 구현하기 </li>
   <li> 테스트하기 </li> 
   <li> 정리하기 </li>
   <li> 업그레이드 및 수정사항 진행하기 </li>
  </ol> 




--------기타 잡생각-------------------
 1. visual studio code에서 Component 색깔이 눈에 띄게 변경하자. (빨간색이나 보라색이 나을 듯)
 2. 컴포넌트 내부에서 사용하지 않는 상수 값을 밖으로 빼면 좋은걸까? 나쁜걸까?
  => 오히려 컴포넌트가 더 가벼워지지 않을까?
 3. styled-component를 쓰기 위해 분리된 style 파일은 jsx가 아닌 js를 써야 하지 않을까?
  => jsx는 자바스크립트안에 html 태그를 쓰기 위해 고안된 것이다.
  => styled-components에서는 딱히 쓸 일이 없기 때문에 js를 쓰자.
 4. Import에서 절대경로를 지정할 수는 없는가?

 ----------변경사항---------------------
 1. ImageSlider에서 imageSlidesInfo를 객체의 배열로 전달했다.
 형식은 [ {url, index} ]로 전달했는데 어차피 이미지 슬라이드에 올라갈 값은 수동으로 넣을 것이므로
 실행중에 map으로 올린 key값은 신경쓰지 않아도 된다. 따라서 index를 지웠다.
 그러면 url만 넘기므로, [url1, url2, url3] 이런식으로 넘겨야하겠지만, 혹여나 나중에 확장성을 고려한다.
 예를 들어 이미지 슬라이드에 제목, 부제목, 내용 등을 이미지 위에 쓸 상황이 올 수도 있다.

 ----------고칠 사항--------------------
1. 화살표를 길게 눌렀을 때, 원래 화살표 이미지가 커서에 붙잡혀서 나타남
=> -webkit-user-drag를 처음 검색했을 때 나왔는데, firefox에서 지원하지 않음
=> 그러던 중에 사이트에서 draggable이라는 html 속성을 알려줘서 적용함

-----------실패 사항----------------------
  추가 요구 사항(가정)! : 마지막 슬라이드에서 처음 슬라이드로 이동할 때, 한 칸만 움직였으면 좋겠어요!!
  => imageSlides에서 양 끝 슬라이드에 서로 반대되는 슬라이드를 추가
  => imageSlides에서 Container에 left값을 주어 각 끝 슬라이드가 보이지 않게 함
   -> imageSlides가 1개일 경우와 2개 이상일 경우
    = 1개일 경우 : left값을 주면 안된다. (양쪽에 슬라이드가 존재하지 않기 때문에)
    = 2개일 경우 : left값을 주어 원래 슬라이드 영역을 맞춰야 한다

  ** 실타래 문제 해결법
  1. 첫번째 시도
  => useCallback으로 moveSlide를 만들어 currentIndex 값을 조정한다. o
  => 만약 moveSlide에서 -1이나 length로 currentIndex 값이 변경되었을 경우, transition을 false로 만들고, currentIndex를 -1은 length-1로, length는 0으로 만든다.
  ======= 실패 : 한 훅은 상태 변경을 여러번할 경우 차례차례 실행시켜 최종적으로 한 값으로 도출된다. 
  ------------------------------------------------------------------------

2023/3/10일 금요일
- imageSlides
 1. map을 통해 ImageSlide를 일렬로 나열
 2. Css를 통해 왼쪽/오른쪽으로 슬라이드 이동시키기
 * 변경사항 1 : 위 참조

=> 해야 할 일 
 - 이미지를 다운받고 ImageSlider에서 url값을 입력하기 (실험용 5장) o
 - ImageSlides에서 이미지를 일렬로 나열하기 o
 - ImageSlides에서 일렬로 나열된 이미지에서 현재 색인인 이미지만 표시
 - ImageSlides에서 왼쪽, 오른쪽으로 이미지 이동시키기

2023/3/12일 일요일
1. ImageSlides에서 이미지를 일렬로 나열하기 <완성>
=> ImageSlides 구조도 만들기 : Wrapper ->  Container -> Content 
  * Wrapper는 단일 개체를 감쌀때 쓰고, Container는 여러 개체를 감쌀 때 쓴다.

2. ImageSlides에서 일렬로 나열된 이미지에서 현재 색인인 이미지만 표시 o
=> Container에 transform css를 써서 왼쪽 오른쪽으로 이동시킨다.
 -> transform : translateX(-width * currentIndex)px;
 -> transition에서는 property를 transform으로 사용해야함
----------------------------------------------------
** 이제 현재 인덱스 값만 변경하면 이미지가 슬라이드 됨 

3. MoveButton을 눌러서 이미지를 좌우로 이동시키기 (미루기)
** 단계
 - MoveButton 시험용 디자인 만들기
 - 각 MoveButton을 클릭했을 때 currentIndex 값 변경하기
 - 추가 요구 사항(가정)! : 마지막 슬라이드에서 처음 슬라이드로 이동할 때, 한 칸만 움직였으면 좋겠어요!!

2023/3/13일 월요일
1. MoveButton을 눌러서 이미지를 좌우로 이동시키기 
** 단계
 - MoveButton 시험용 디자인 만들기 o
 - 각 MoveButton을 클릭했을 때 currentIndex 값 변경하기 o
 
 * 고칠사항1 참조

2023/3/15일 수요일
1. IndexButton 시험용 디자인 만들기 o
2. IndexButton 눌렀을 때 화면 이동시키기 o

<img src="https://user-images.githubusercontent.com/122195454/225484144-d5350982-a680-4d39-b9e5-26a18a30fe28.gif" />

