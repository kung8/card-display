import React, {Component} from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';

export default class App extends Component {
    constructor(){
      super()
      this.state={
        
      }
    }

    render(){
      console.log(data)
        return(
            <div>
              <Nav/>
              <Card data={data}/>
            </div>
        )
    }
}