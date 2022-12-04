import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             haserror:false,
             
        }
    }
    
    componentDidCatch(error,errorInfo)
    {
        this.setState({
            haserror:true,
            
        })
    }
  render() {
    
           if(this.state.haserror){
            return <h3>something went wrong</h3>
           }
    return this.props.children;
  }
}
export default ErrorBoundary;