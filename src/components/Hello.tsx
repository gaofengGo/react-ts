import * as React from 'react';
import styled from "styled-components";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const StyledHello = styled.div`
  .hello {
    text-align: center;
    margin: 20px;
    font-size: 48px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    button {
      margin-left: 25px;
      margin-right: 25px;
      font-size: 40px;
      min-width: 50px;
    }
  }
`;

const Hello = (props: Props) => {
  const { name, enthusiasmLevel = 1 } = props;
  const [sex, setSex] = React.useState('woma');
  
  if (enthusiasmLevel <= 0) {
    setSex('man')
    throw new Error("You could be a little more enthusiastic. :D");
  }
  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join("!");
  };
  return (
    <StyledHello>
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
          {sex}
        </div>
      </div>
    </StyledHello>
  );
};

export default Hello;

// helpers
