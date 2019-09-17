import React, { Component } from 'react';

export default class OrderFormContainer extends Component {
  state = {
    formId:"",//fetch from backend upon mounting
    patientId:"",//fetch from backend upon mounting
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

  componentDidMount(){
    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let year = date.getFullYear()
    let fullDate = `${month}/${day}/${year}`

    if(this.state.date === "" ){
      this.setState({
        date:fullDate
      })
    }
  }

  handleTextInput = (e) => {
    console.log(e.target.value)
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleComplexTextInput = (e) => {
    console.log(e.target.value)
    let value = e.target.value;
    let name = e.target.name;
    let primary = name.split(".")[0]
    let secondary = name.split(".")[1]
    this.setState((prevState) => {
      const newState = Object.assign({}, prevState);
      newState[primary][secondary] = value;
      return newState;
    })
  }

  handleSubmit = (e) => {
    console.log('You just submitted the form')
    console.log(this.state.date)

  }

  render(){
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
        <input
          type="text"
          title="date"
          name="date"
          placeholder="mm/dd/yyyy"
          value={this.state.date}
          onChange={this.handleTextInput}
        />
        <input
          type="text"
          title="right sphere"
          name="rightEye.sphere"
          placeholder="ex. -2.00"
          value={this.state.rightEye.sphere}
          onChange={this.handleComplexTextInput}
        />
        <input
          type="submit"
          value="Submit"
        />

      </form>
    )
  }
}
