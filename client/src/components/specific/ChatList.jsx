import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";
const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
}) => {
  return (
    <Stack
      sx={{
        overflowY: "scroll",
        height: "100%",
        width: w,
        "&::-webkit-scrollbar": {
          width: "0.4rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,0.2)",
        },
      }}
    >
      {chats?.map((data, index) => {
        const { _id, groupChat, members, name, avatar } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((member) =>
          onlineUsers.includes(member)
        );
        return (
          <div className=" hover:bg-slate-200" key={index}>
            <ChatItem
              _id={_id}
              groupChat={groupChat}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
              chatId={chatId}
              newMessageAlert={newMessageAlert}
              handleDeleteChatOpen={handleDeleteChat}
              sameSender={chatId == _id}
            />
          </div>
        );
      })}
    </Stack>
  );
};

export default ChatList;
