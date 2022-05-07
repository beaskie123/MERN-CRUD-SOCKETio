import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import io from "socket.io-client";
import { useState } from "react";
import Chat from "../component/chat/Chat";

const socket = io.connect('http://localhost:3001');

function Main() {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };

  return (
    <div className='main-container'>
      <Container className='container'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Babble Space</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Your Name Here" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
  
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
      </Container>
    </div>
  )
}

export default Main