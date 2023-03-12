--------기타 잡생각
 1. visual studio code에서 Component 색깔이 눈에 띄게 변경하자. (빨간색이나 보라색이 나을 듯)

2023/3/10일 금요일
- imageSlides
 1. map을 통해 ImageSlide를 일렬로 나열
 2. Css를 통해 왼쪽/오른쪽으로 슬라이드 이동시키기

 기존 코드 변경사항
 => ImageSlider에서 imageSlidesInfo를 객체의 배열로 전달했다.
 형식은 [ {url, index} ]로 전달했는데 어차피 이미지 슬라이드에 올라갈 값은 수동으로 넣을 것이므로
 실행중에 map으로 올린 key값은 신경쓰지 않아도 된다. 따라서 index를 지웠다.
 그러면 url만 넘기므로, [url1, url2, url3] 이런식으로 넘겨야하겠지만, 혹여나 나중에 확장성을 고려한다.
 예를 들어 이미지 슬라이드에 제목, 부제목, 내용 등을 이미지 위에 쓸 상황이 올 수도 있다.

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

3. MoveButton을 눌러서 이미지를 좌우로 이동시키기
** 단계
 - MoveButton 시험용 디자인 만들기
 - 각 MoveButton을 클릭했을 때 currentIndex 값 변경하기
 - 추가 요구 사항(가정)! : 마지막 슬라이드에서 처음 슬라이드로 이동할 때, 한 칸만 움직였으면 좋겠어요!!

 