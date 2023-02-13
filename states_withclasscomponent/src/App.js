import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{

  constructor()
  {
    super();
    this.state=
    {
    name:"Taniya",
    name1:"happy",
    email: "roddetanu2gmail.com"

    }

  }


  render()
  {

    return(
    <>
    <h1>Hello from -{this.state.name}</h1>
    <h1>Email -{this.state.email}</h1>
    <button onClick={()=>this.setState({name:"happy", email:"happ@gmail.com"})}>change</button>


    </>
    
      
      
    )

     
    
    

  }
}

export default App;
