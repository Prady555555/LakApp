/* eslint-disable react-refresh/only-export-components */
import { useRef } from "react";
import AppLayouts from "../components/layouts/AppLayouts";
import { IconButton, Stack } from "@mui/material";
import { AttachFile, Send } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponets";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../containts/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const Chats = () => {
  const user = {
    _id: "aspd",
    name: "John Doe",
  };
  const containerRef = useRef(null);
  const fileMenuRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        color={"black"}
        height={"80%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>
      <form
        style={{
          height: "10rem",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton>
            <AttachFile />
          </IconButton>
          <InputBox placeholder="Type your Message" />
          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: "blue",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayouts()(Chats);
