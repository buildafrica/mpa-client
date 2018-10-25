import React, { Component } from 'react';
import './css/HeaderSearch.css';
import { Form, FormGroup, Input } from "reactstrap";


class HeaderSearch extends Component {
  render() {
    return (
      <Form className="form-inline mt-1">
        <FormGroup>
          <Input type="search" placeholder=" Search" className="HeaderInput">

          </Input>
        </FormGroup>
      </Form>

    )
  }
};

export default HeaderSearch;