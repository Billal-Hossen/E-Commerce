import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">ECommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Home</Link>
                    </Nav>
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Offers</Link>
                    </Nav>
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Brands</Link>
                    </Nav>
                </Nav>
                <Nav>
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Wishlist</Link>
                    </Nav>
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Cart</Link>
                    </Nav>
                    <Nav className="my-auto mx-2">
                        <Link to="/" className="HeaderLink">Profile</Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
