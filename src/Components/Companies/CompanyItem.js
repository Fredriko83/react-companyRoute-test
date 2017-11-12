import React, { Component } from "react";

class CompanyItem extends Component {
  
  deleteCompany(){
    console.log("delete this shit!")
  }
  
  render() {
    console.log(this.props);
    return <li className="Company">{this.props.company.name} {this.props.company.CompanyAdmin.name} {this.props.company.CompanyAdmin.email} <a href="#" onClick={this.deleteCompany.bind(this)}>X</a> </li>;
  }
}

export default CompanyItem;
