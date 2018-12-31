import * as React from 'react';


class Hello extends React.Component<any, object> {
    
    public render() {
      const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
      </div>
        </div>
      );
    }
  }

  export default Hello;

  // helping functions goes here

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }