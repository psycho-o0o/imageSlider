<h1> 이미지 슬라이더 - 장동건 </h1>
 <h2> 개발기간 </h2>
 Version 0.0.1 : 2023년 3월 10일 ~ 2023년 3월 15일
 
 <h2> 개발목적 </h2>
 React 개발과정을 습득하기 위해 간단한 이미지 슬라이더 만들기
 이미지 슬라이더의 작동방식을 이해하고, 다양한 이미지 슬라이더 분석하기 
 
 <h2> 개발 규칙 사항 </h2>
 <ol>
  <li> 구조의 틀을 정확하게 짠 이후에 프로그래밍을 시작한다. </li>
  <li> 프로그래밍 도중에 떠오르는 간단한 궁금증은 적어놓고 나중에 해결한다. </li>
  <li> 오류나 핵심 문제 해결 방법은 시간을 할애해 차분하게 읽고 정리한다. </li>
  <li> 프로그래밍을 하면서 생각과 논리를 정리하고 천천히 진행한다. </li>
  <li> 개발 시 불편한 점은 항상 해결한다. </li>
 </ol>
 
 <h2> 개발 순서 </h1>
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
 
 <hr />
 <h3> 요구사항 정의하기 </h3>
  <ul>
   <li> 이미지가 양옆으로 이동했으면 좋겠어요. </li>
   <li> 또한 이미지가 양옆 말고도 특정 순서로도 이동했으면 좋겠어요. </li>
  </ul>
  
 <h3> 요구사항 분석하기 </h3>
  <ul>
   <li> 1번 요구사항
    <ul>
     <li> 이미지를 순차적으로 나열한다. </li>
     <li> 양 버튼을 통해 왼쪽과 오른쪽으로 이동시킨다. <li>
    </ul>
   </li>
   <li> 2번 요구사항
    <ul>
     <li> 이미지의 순서를 나타내는 버튼을 만든다. </li>
     <li> 버튼을 눌렀을 때 해당하는 이미지로 이동한다. </li>
    </ul>
   </li>
  </ul>
  
  <h3> 기능 단위로 나누고 큰 틀 만들기 </h3>
   <ul>
    <li> 컨테이너로서 상태값 및 함수를 관리하는 ImageSlider </li>
    <li> 이미지를 나열하고 이동을 담당하는 ImageSlides </li>
    <li> 양 옆으로 이동하는 MoveButton </li>
    <li> 해당 순서로 이동하는 IndexButton </li>
   </ul>
   
   <h3> 세부 기능에서 구조 만들기 </h3>
     <li> ImageSlides
      <ul>
       <li> Map을 통해 ImageSlide(슬라이드 한개)를 일려로 나열 </li>
       <li> Css(TranslateX)를 통해 왼쪽과 오른쪽을 이동시키기 </li>
       <li> 컴포넌트 구조도 : Wrapper -> Container -> ImageSlide(배열) </li>
      </ul>
     </li>
     <li> MoveButton
      <ul>
       <li> type이란 prop을 통해 왼쪽과 오른쪽을 css를 통해서만 변경  </li>
       <li> 클릭시 정의되는 이벤트는 ImageSlider 컨테이너에서 담당하기 </li>
       <li> 컴포넌트 구조도 : Wrapper -> ImageWrapper </li>
      </ul>
     </li>
     <li> IndexButton
      <ul>
       <li> 이미지 슬라이드에 해당하는 만큼 버튼을 만든다.  </li>
       <li> 현재 보이는 슬라이드와 같은 순서에 버튼은 따로 처리된다.(검정색) </li>
       <li> 컴포넌트 구조도 : Wrapper -> Container -> Button( </li>
      </ul>
     </li> 
 <hr/>

 <h4> 고칠 사항 </h4>
  <ol>
   <li> 화살표를 길게 눌렀을 때, 화살표 이미지가 커서에 붙잡혀서 css 효과가 사라짐 (해결)
    <ul>
     <li>-webkit-user-drag를 검토했지만 파이어폭스가 지원하지 않아서 포기</li>
     <li>draggable이라는 태그 속성을 반영하기로 결정</li>
    </ul>
   </li>
  </ol>
  
  <h4> 변경 사항 </h4>
  <ol>
   
  </ol>
  
  <h4> 실패 사항 </h4>
  <ol>
   <li> 끝에서 끝으로 이동할 때, 한 칸만 움직였으면 좋겠어요!!
    <ul>
     <li> 
      <h6>양 끝에 반대되는 슬라이드를 추가하고 정상적으로 이동한 후에 transition 효과를 끈 후 원래 위치로 다시 이동하기</h6>
      <p> 실패한 이유 : currentIndex 상태값을 변경시키고, 이 변경시킨 값을 useEffect로 검사한 후에 다시 변경하게 되는데 </br>
       이때 훅은 렌더링 전까지 순차적으로 큐에 들어가서 한번에 실행되므로, 결국 처음 상태 변경값이 반영되지 않음
      </p>
     </li>
    </ul>
   </li>
  </ol>
  

--------기타 잡생각-------------------
 1. visual studio code에서 Component 색깔이 눈에 띄게 변경하자. (빨간색이나 보라색이 나을 듯)
 2. 컴포넌트 내부에서 사용하지 않는 상수 값을 밖으로 빼면 좋은걸까? 나쁜걸까?
  => 오히려 컴포넌트가 더 가벼워지지 않을까?
 3. styled-component를 쓰기 위해 분리된 style 파일은 jsx가 아닌 js를 써야 하지 않을까?
  => jsx는 자바스크립트안에 html 태그를 쓰기 위해 고안된 것이다.
  => styled-components에서는 딱히 쓸 일이 없기 때문에 js를 쓰자.
 4. Import에서 절대경로를 지정할 수는 없는가?

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

 <h2> 개발하면서 공부한 것 </h2>
  <ol>
   <li> React의 작동 방식 중 hook 관련된 내용 
    <ul>
     <li>리액트는 렌더링 전의 훅을 큐에 순차적으로 넣고 한번에 실행시킨다.</li>
     <li>따라서 훅이 여러번 발생해도 한번의 렌더링 때 반영되는 결과값은 가장 마지막 훅의 결과값이다. </li>
    </ul>
   </li>
   <li> ShouldComponentUpdate, PureComponent, React.Memo, useMemo
    <ul>
     <li>ShouldComponentUpdate : 변경될 Props와 State를 현재 값과 비교하여 렌더링의 여부를 결정한다. 이는 렌더링의 방지가 목적이 아닌 최적화가 목적이다.</li>
     <li>PureComponent : Component 클래스에 ShouldComponentUpdate를 적용한 클래스이다. </li>
     <li>React.Memo : HOC기법을 통해 함수형 컴포넌트에 ShouldComponentUpdate를 적용시킨 기법으로, 특정 상태값에 따라 렌더링을 스킵하지는 못한다. </li>
     <li>useMemo : deps에 있는 상태값이 변경되었을 때만 인자로 넘어온 함수를 다시 실행시킨다. (함수형 컴포넌트도 이를 이용하여 리렌더링을 넘길 수 있다.) </li>
  </ol>
  
  <h2> 사용한 기술 </h2>
 리액트, styled-components
 
 <h2> 사용한 확장 프로그램(VS Code) </h2>
 <ul>
  <li> vscode-styled-components : styled-components로 된 코드에 하이라이트와 에러제공 및 자동문법 기능 제공</li>
  <li> Styled-Components Extractor : 파일 내에서 styled-components에서 import되지 않은 컴포넌트를 추출해 파일을 만들고 임포트 해온다. </li>
  <li> Reactjs code snippets : 반복적인 리액트 파일을 만들때 축약어로 기본 형식의 파일을 만든다. </li>
  <li> Auto Rename Tag : 태그의 시작과 끝에서 이름을 동시에 바꿔준다. </li>
 </ul>

<img src="https://user-images.githubusercontent.com/122195454/225484144-d5350982-a680-4d39-b9e5-26a18a30fe28.gif" />

