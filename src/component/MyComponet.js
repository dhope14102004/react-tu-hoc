import React from 'react';

class MyComponet extends React.Component {
state = {
    name: "Kiet",
    age: 20,
    address: "Hanoi"
}

handleClick = (event) => {
    console.log("Click me");
    
   
    this.setState({
        name: "Hope",
        age: Math.floor(Math.random() * 100) + 1,
    });

}


handleOnMouseOver(event) {
    // console.log(event);
}



render() {
        return(
        <div>
            My name is {this.state.name} and I'm  {this.state.age}
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>    
            <button onClick={(event) => {this.handleClick(event)}}>Click me</button>    
            
        </div>
        );
    }
} 

export default MyComponet;