# react_style

## React 프로젝트 내에서의 css 전처리기인 scss와 css-module, styled-component 사용 연습
### 1️⃣ css-module

* 브라우저로 컴파일링 시 클래스명에 임의의 해쉬를 붙이는 방식으로 스타일 중첩을 막아준다.
* 리액트에 기본 세팅되어있어서 설치할 필요가 없다.

		
*  기존 상황 : css 파일을 다르게 적용했지만 클래스명이 중복되어 스타일 속성이 겹쳐써지는 문제 발생 ( 나는 일일이 클래스명을 바꿔주는 방식을 택했었다. 😂)

* Browser
<img src="https://images.velog.io/images/e_ong/post/2be184fd-902e-470b-93c0-ca383de429b6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-10%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.27.05.png" width= 80%>
<img src="https://images.velog.io/images/e_ong/post/0fb5e0c5-af2f-406e-9c88-26fc0db5f5ef/css%20module%20practice.png" width= 70%>

#### 💡 사용하기

(1)  css 파일명 뒤에

![](https://images.velog.io/images/e_ong/post/748c1cd3-953a-436a-b0f0-8496e4e459ce/components.png)

⬇️  .module 을 붙여준다.

![](https://images.velog.io/images/e_ong/post/e3fa1eba-e3e5-4c90-a554-a29e7352f91e/components.png)

(2) css을 적용하는 js 파일에 import, className 형식을 변경해준다.


* Button1.js, Button2.js
<img src="https://images.velog.io/images/e_ong/post/3fff1f39-be8c-4350-959d-3e91115ba79b/import%20styles%20from'.button1.module.css';.png" width= 70%>
`import styles from'./button1.module.css';` 에서 styles는 임의의 변수

<br>

* Browser
클래스명 바뀌어서 컴파일 되므로 더이상  중첩이 되지 않는다.
![](https://images.velog.io/images/e_ong/post/10b3ef8f-2ed6-4a1c-9705-832f520d5f51/class=button2_title__ny6e0css%20module%20practiceh1.png)
![](https://images.velog.io/images/e_ong/post/3d67964a-effd-4bee-a1c9-fd065d345400/Styles%20Computed%20Layout%20Event%20Listeners%20DOM%20Breakpoints%20Properties%20Accessibilty.png)
<img src="https://images.velog.io/images/e_ong/post/6bb7576c-d905-4c60-82a2-8dc97e763909/CSS%20module%20practice.png" width= 80%>

<br>

---

### 2️⃣ styled-component

* CSS in JS 관련 리액트 라이브러리


[⭐️ 참고자료](https://react.vlpt.us/styling/03-styled-components.html)

[공식문서](https://styled-components.com/)대로 설치
`npm install --save styled-components
`
####  💡 특징
* 변수로 컴포넌트를 만들어서 바로 사용할 수 있다.
* css 파일을 따로 만들지 않아도 되므로 파일 관리가 용이, but 가독성은 떨어진다.
* 만든 컴포넌트에 속성을 내려줄 수 있다.

#### 💡 사용하기(1)

기본 사용법을 연습해보자.

* App.js
`import styled from 'styled-components';`

 ⬇️ SelectionBox 라는 컴포넌트를 변수로 선언,  styled된 div로 만들어준다.
` styled.div`` ` (백틱 안에 스타일 속성 넣어주기)
<img src="https://images.velog.io/images/e_ong/post/1c0efc77-fd98-4112-afe9-02792731faca/import%20Test%20from%20.componentsTest'.png" width= 70%>

 ⬇️ Props 받아와서 특정 스타일 속성 값으로 내려주기
 (⭐️ styled-component를 사용하는 가장 큰 이유라고 할 수 있다.)
 <img src="https://images.velog.io/images/e_ong/post/efcd29d4-f773-488b-8439-077c94a75eb2/const%20SelectionBox.png" width= 70%>
 
 * Browser
 <img src="https://images.velog.io/images/e_ong/post/24175203-9e58-4b2d-859c-1ce2b56519bd/section1.png" width= 60%>
 
 
#### 💡 사용하기(2) 

  이번에는 속성 값을 삼항연산자로 처리해보자.
  * App.js
  
   ⬇️ Circle 이라는 styled.span 를 만들고, 컴포넌트로 4개 생성한다.
   backgroundColor 를 prop 로 전달하고, 마지막 Circle 컴포넌트에서는 전달하지 않았다. 
   ![](https://images.velog.io/images/e_ong/post/fb3c0685-9776-410e-aa82-dbde6d07f688/Circle%20backgroundColor.png)
   
   `background : ${(props) => props.backgroundColor || 'skyblue'}` ➔ props에 backgroundColor가 있다면 그 값을 background로 지정하고, 없으면 'skyblue'로 지정한다.
   따라서, 마지막 Circle 컴포넌트는 background : 'skyblue'가 전달된다.
   ![](https://images.velog.io/images/e_ong/post/14d48582-bdb9-405f-8c05-d6831af79424/display%20inline-block;.png)
   
   * Browser
    <img src="https://images.velog.io/images/e_ong/post/0a70e530-c497-479a-a427-58e8f2c8667b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.32.18.png" width= 60%>
    
<br>

   * App.js
   
   ⬇️ 두번째 circle 에만 box 라는 props 내려주고, 이를 styled 에 전달
 
  ```   
  <Circle backgroundColor = 'powderblue'/>
   <Circle backgroundColor = 'deepskyblue' box />
   <Circle backgroundColor = 'steelblue'/>
   <Circle />
   ```
      
* Box 라는 props가 있으면 `css`` `의 형태로  css 속성 적용

* styled-components 에서 css 도 임포트 해줘야함
` import styled, { css } from 'styled-components';`
 <img src="https://images.velog.io/images/e_ong/post/c47f774c-b5a6-44c6-936c-9efbf8c2ad68/const%20Circle%20styled.%20span.png" width= 80%>
 * Browser
 <img src="https://images.velog.io/images/e_ong/post/cfe1f7a3-96d9-4794-a4b1-efd016165470/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-12%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.59.00.png" width= 60%>
