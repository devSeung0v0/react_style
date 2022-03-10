
import './App.css';
import Test from './components/Test';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, { css } from 'styled-components';
import Button3 from './components/Button3';


const SelectionBox = styled.div`
  width: 300px;
  height: 100px;
  background-color: #789;
  border-radius: 10px;
  margin: 10px 0;
  font-size : ${ props => props.fontSize};
`

const Circle = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.backgroundColor || 'skyblue'};
  ${props => props.box && 
    css`
      width: 100px;
      height: 100px;
    `
  }
`

function App() {

  //rest 파라미터 확인
  // const red = '빨강';
  // const blue = '파랑';
  // function colors(texts,...values){
  //     console.log(texts)
  //     console.log(values)
  // }

  // colors `내가 자주 입는 옷의 색깔은 ${red}와 ${blue}입니다.`

  return (
    <div className="App">
      <Button3 color="royalblue">호출된 자식 컴포넌트 버튼</Button3>
      <Button1 />
      <Button2 />
      <Test />
      <SelectionBox fontSize = '30px'> section1 </SelectionBox>
      <SelectionBox fontSize = '50px'> section2 </SelectionBox>
      <Circle backgroundColor = 'powderblue'/>
      <Circle backgroundColor = 'deepskyblue' box />
      <Circle backgroundColor = 'steelblue'/>
      <Circle />

    </div>
  );
}

export default App;
