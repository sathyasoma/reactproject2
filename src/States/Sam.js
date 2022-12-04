import React, { Component } from 'react'

 class Sam extends Component {
constructor(props){
    super(props);

    this.state={
        company:""
    }
}

changeVal(x){

    this.setState(
        {
            company:x.target.value
        }
    )

}

  render() {
    return (
      <div>
      <h2>event example</h2>
      Enter Compny name:<input type="text" id="comapany" onChange={this.changeVal.bind(this)}></input>
      <h3>you enterd{this.state.company}</h3>
      
      </div>
    )
  }
}
export default Sam;
