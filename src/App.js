import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Gallery from './gallery'
import Gallery1 from './gallery1'

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Gallery image="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" image1="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" image2="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" image3="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" image4="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" image5="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg"
        image6="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAdXi3q8J0m3WbG1kbFecmsBNsVk0edXuZw&usqp=CAU"
        image7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTOka7yiD9kwnZGsEZR6-w40z2R9obqb8-g&usqp=CAU"
        image8="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAVcITnv8HXR-Mex0N95xCxN08NXf0OLiqg&usqp=CAU"
        image9="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
        image10="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ne4fxlOxhGDTycjkVZd_4KxtraQ0WP4DoQ&usqp=CAU"
        image11="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg"
        />
      </div>
    
    );
  }
}

export default App;

