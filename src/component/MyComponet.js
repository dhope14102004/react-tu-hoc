import React from 'react';

class MyComponet extends React.Component {
state = {
    name: "Kiet",
    age: 20,
    address: "Hanoi"
}

handleClick(event) {
    console.log("Click me");
    console.log("My name is " + this.state.name);
    
}
handleOnMouseOver(event) {
    console.log(event);
}



render() {
        return(
        <div>
            My name is {this.state.name} and I'm from {this.state.address}
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>    
            <button onClick={this.handleClick}>Click me</button>    
            
        </div>
        );
    }
} 

export default MyComponet;