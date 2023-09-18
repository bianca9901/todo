import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const NavTaskSearch = () => {

  return (
    <Form inline onSubmit="">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value=""
        onChange=""
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default NavTaskSearch;
