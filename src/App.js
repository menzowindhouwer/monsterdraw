import React from 'react';
import './App.css';
import CanvasDraw from 'react-canvas-draw';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GithubPicker } from 'react-color';

var monsterCount = 10;
var monsterPath = process.env.PUBLIC_URL + '/monsters';

class Draw extends React.Component {
  state = {
    color:"#FF0000"
  };
  setColor = (c) => {
    this.setState({color: c});
  }
  selectColor = () => {
  }
  handleChangeComplete = (color, event) => {
    this.setState(this.setColor(color.hex));
  };
  render() {
    return (
      <div>
        <ButtonGroup size="lg">
          <Button variant="primary" onClick={() => this.canvas.clear()}>clear</Button>
          <Button variant="primary" onClick={() => this.canvas.undo()}>undo</Button>
          <Button variant="primary" onClick={() => this.selectColor()}>color</Button>
        </ButtonGroup>

        <CanvasDraw ref={canvasDraw => this.canvas = canvasDraw} brushColor={this.state.color}/>
        <GithubPicker onChangeComplete={this.handleChangeComplete}/>
      </div>
    )
  }
}

function App() {
  
  var monster = Math.floor(Math.random()*monsterCount);
  console.log('monster['+monster+']')
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${monsterPath}/${monster}.png`} className="App-logo" alt="logo" />
        <Draw />
      </header>
    </div>
  );
}

export default App;
