import React, { Component } from "react";
import CompanyItem from "./CompanyItem";

class Companies extends Component {
  render() {
    let companyItems;
    if (this.props.companies) {
      companyItems = this.props.companies.map(company => {
        return <CompanyItem key={company.id} company={company} />;
      });
    }
    return <div className="Companies">{companyItems}</div>;
  }
}

export default Companies;
