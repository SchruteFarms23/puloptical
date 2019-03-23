import React, { Component } from 'react';

export default class OrderFormContainer extends Component {
  state = {
    formId:"",
    patientId:"",
    firstName:"",
    lastName:"",
    phoneNum:"",
    date:"",
    rightEye:{sphere:"",cylinder:"",axis:"",prismBase:"",add:"",ht:"",pd:""},
    leftEye:{sphere:"",cylinder:"",axis:"",prismBase:"",add:"",ht:"",pd:""},
    specialInst:"",
    manufactureOrder:"",
    planNumber:"",
    hiPlastic:{onesixty:false,onesixtyseven:false,oneseventyfour:false}
  };


  handleTextInput = (e) => {
    console.log(e.target.value)
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log('You just submitted the form')
    debugger
  }

  render(){
    console.log(`Last name is ${this.state.lastName}`)
    console.log(`first name is ${this.state.firstName}`)
    console.log(`first name is ${this.state.phoneNum}`)

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          title="Last Name"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleTextInput}
        />
      <input
          type="text"
          title="First Name"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleTextInput}
        />
      <input
          type="text"
          title={"Phone Number"}
          name="phoneNum"
          placeholder="ex. 3476220158"
          value={this.state.phoneNum}
          onChange={this.handleTextInput}
        />
      <input type="submit" value="Submit" />

      </form>
    )
  }
}
