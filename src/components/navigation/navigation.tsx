import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './navigation.css';

const Navigation: FC = () => {
  return (
    <Navbar style={{ position: 'fixed', right: 0, bottom: 0 }} collapseOnSelect>
      <Nav.Link as={Link} to="/">
        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
      </Nav.Link>
      <Nav.Link as={Link} to="/archive">
        <i className="fa fa-archive fa-lg" aria-hidden="true"></i>
      </Nav.Link>
    </Navbar>
  );
};

export default Navigation;
