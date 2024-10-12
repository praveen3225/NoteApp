import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(){
    return (
        <>
            <Navbar className="customNavbar">
                <Container className="d-flex justify-content-center align-items-center">
                <h2 className="title-align">SnapNotes</h2>
                <Nav className="me-auto">
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;
