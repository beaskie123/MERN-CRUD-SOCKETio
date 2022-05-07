import React, { useEffect, useState } from "react";
import './App.css';
import ScrollToBottom from "react-scroll-to-bottom";
import { Container,  Nav,  Navbar, NavDropdown } from "react-bootstrap";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Container className=' container'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Babble Space</Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          {/* <Form className="joinChatContainer d-flex">
              <FormControl
                type="text"
                placeholder="Enter your NickName"
                className="me-2"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
          </Form>
          <Form className="joinChatContainer d-flex">
              <FormControl
                 type="text"
                 placeholder="Enter Room ID..."
                className="me-2"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
          </Form>
            <Form className="joinChatContainer d-flex">
          <button onClick={joinRoom}>Join A Room</button>
          </Form> */}
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
        <div className="chat-window">
          <div className="chat-header">
            <p>Live Chat</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent,index) => {
                return (
                  <div
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                    key={index}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
    </div>
    </Container>
  );
}

export default Chat;
