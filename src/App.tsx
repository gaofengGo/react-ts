import * as React from 'react';
import './App.css';
import StyledHello from "./components/Hello";
import styled from 'styled-components';
// import StyledComponent from './components/Component/Component';

const Title = styled.h1`
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
          我就是TItle  
        </Title>
      </div>
    );
  }
}

export default App;
