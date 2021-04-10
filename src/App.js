import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

class App extends React.Component {
    state = {
        Person: { fullname : "nour", bio : "mez", imgSrc : "https://i.pinimg.com/236x/f3/6c/8d/f36c8d185986e2803afef9533b600bc5.jpg ", profession : " dev"} ,
        show :true,
        count:0,
    };
    //change the state sho value
    handleClick = () => this.setState({ show: !this.state.show })
    //show the time interval when mounting
    componentDidMount(){
       setInterval(() => {
       this.setState({count:this.state.count+1})    
       }, 1000);
   }
    render() {
       
            return (
                <div className="App" >
              
                <button onClick={this.handleClick}> ClickMe </button>
                <h1>{this.state.count}</h1>
                {this.state.show?
                <div>
                <p> {this.state.Person.fullname} </p> 
                <p> {this.state.Person.bio} </p> 
                <p> {this.state.Person.profession} </p> 
                <img src={this.state.Person.imgSrc} alt=""></img> 
                </div>
                :null
        }
                </div>
            );
        }
    
}
export default App;