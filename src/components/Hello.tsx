import * as React from 'react';
import styled from 'styled-components';
import './Hello.css'

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

const StyledHello = styled(Hello)`
  &{
    text-align: center;
    margin: 20px;
    font-size: 48px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    button {
      margin-left: 25px;
      margin-right: 25px;
      font-size: 40px;
      min-width: 50px;
    }
  }
`
export default StyledHello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}