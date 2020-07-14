import React from 'react';
import './App.css';
import CanvasDraw from 'react-canvas-draw';
import button from 'react-bootstrap';

var monsterCount = 10;
var monsterPath = process.env.PUBLIC_URL + '/monsters';


class Color extends React.Component {
  state = {
    color:this.props.color
  };
  render() {
    return (
        <div
          style={{
            display: "inline-block",
            width:"24px",
            height: "24px",
            backgroundColor: this.state.color 
          }}
          onClick={() => this.props.setColor(this.state.color)}
        />
    )
  }
}

class Draw extends React.Component {
  state = {
    color:"#FF0000"
  };
  setColor = (c) => {
    this.setState({color: c});
  }
  render() {
    return (
      <div>
        <CanvasDraw ref={canvasDraw => this.canvas = canvasDraw} brushColor={this.state.color}/>
        <button variant="primary" onClick={() => this.canvas.clear()}>clear</button>
        <button variant="primary" onClick={() => this.canvas.undo()}>undo</button>
        <Color color="#FF0000" setColor={this.setColor}/>
        <Color color="#00FF00" setColor={this.setColor}/>
        <Color color="#0000FF" setColor={this.setColor}/>
        <Color color="#ffff00" setColor={this.setColor}/>
        <Color color="#00ffff" setColor={this.setColor}/>
        <Color color="#ff66cc" setColor={this.setColor}/>
        <Color color="#ff00ff" setColor={this.setColor}/>
        <Color color="#ff6600" setColor={this.setColor}/>
        <Color color="#000099" setColor={this.setColor}/>
        <Color color="#666699" setColor={this.setColor}/>
        <Color color="#000000" setColor={this.setColor}/>
        <Color color="#994d00" setColor={this.setColor}/>
        <Color color="#284d00" setColor={this.setColor}/>
        <Color color="#ffb3cc" setColor={this.setColor}/>
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
