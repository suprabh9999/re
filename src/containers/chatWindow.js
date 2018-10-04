import React from "react";
import store from "../store";
import Chats from "../containers/chat"; 
import Header from "../components/header";
import './chatWindow.css';
import _ from "lodash";
import MessageInput from "./messageInput";


const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const { typing } = state;
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;