import React, { Component } from 'react'

class Test extends Component {
   
    constructor(props){
        super(props);

        this.state={
            message:"hello"
        }
    }

    changeHandle(param){

        this.setState(
            {
                message:param
            }
        )
    }



  render() {
    return (
      <div>
      
      <h2>{this.state.message}</h2>
      <button onClick={()=>this.changeHandle("goodbye")}>click me</button>
      
      </div>
    )
  }
}
export default Test;

