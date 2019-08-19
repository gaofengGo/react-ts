import * as React from 'react';
import './App.css';
import StyledHello from "./components/Hello";
import styled from 'styled-components';
// import StyledComponent from './components/Component/Component';

const Tss = (props: any) =>( 
    <span>我就是TItle</span>
)


const Title = styled.div`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <StyledHello name='高枫' enthusiasmLevel={2} />
        <Title>
          <Tss />
        </Title>
      </div>
    );
  }
}

export default App;
