import React from "react";
import { Grid, Box } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";

import ChatList from "../specific/ChatList";
import { sampleChats } from "../../containts/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayouts = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("DeleteChat", _id, groupChat);
    };
    return (
      <div>
        {/* Title and Header are common for every layout */}
        <Title />
        <Header />
        {/* Grid container with dynamic height */}
        <Grid
          container
          style={{ height: "calc(100vh - 4rem)" }}
          // Set dynamic height
        >
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              onlineUsers={["1", "2"]}
              newMessagesAlert={[
                {
                  chatId,
                  count: 4,
                },
              ]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              backgroundColor: "gray",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
        Footer
      </div>
    );
  };
};

export default AppLayouts;
