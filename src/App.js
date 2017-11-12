import React, { Component } from 'react';
import Companies from './Components/Companies/Companies';
import AddCompany from './Components/Companies/AddCompany';
import uuid from 'uuid';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  //44.51
  componentWillMount(){
    //alternative compenentDidMount //life cycle method
    this.setState({companies: [
      {
        id: uuid.v4(),
        name: "Company1",
        CompanyAdmin: {name: "Johan", email:"johan@gmail.com"},
      },
      {
        id: uuid.v4(),
        name: "Company2",
        CompanyAdmin: {name:"Piotr", email:"piotr@gmail.com"},
      }
    ]})
  }

  handleAddCompany(company){
    console.log(company);
    let companies = this.state.companies;
    companies.push(company);
    this.setState({companies:companies})
  }

  render() {
    return (
      <div className="App">
        <h2>Companies...</h2>
        <AddCompany addCompany={this.handleAddCompany.bind(this)}/>
        <Companies companies={this.state.companies}/>        
      </div>
    );
  }
}

export default App;
