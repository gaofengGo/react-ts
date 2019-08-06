import * as React from "react";
import styled from "styled-components";

class Xxx extends React.Component {
  public render() {
    return (
      <div>
        container
        <h2>title</h2>
        <div>body</div>
      </div>
    );
  }
}

const StyledComponent = styled(Xxx)`
  & {
    color: red;
    h2 {
      color: blue;
    }
    div {
      font-size: 30px;
      color: pink;
    }
  }
`;

export default StyledComponent;
