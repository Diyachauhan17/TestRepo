import React from 'react'

function Component1() {
    return <h2>Match Started</h2>;
  }
  
function Component2() {
    return <h2>No Match Today</h2>;
}
function If_statement(props) {
    const isMatch = props.isMatch;

    if (isMatch) {
      return <Component1 />;
    }
  
    return <Component2 />;
  }


export default If_statement