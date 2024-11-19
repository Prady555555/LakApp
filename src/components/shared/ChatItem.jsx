import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../styles/StyledComponets";
import { memo } from "react";
import AvatorCard from "./AvatorCard";

const ChatItem = ({
  groupChat = false,
  _id,
  name,
  avatar = [],
  sameSender,
  isOnline,

  index = 0,
  handleDeleteChatOpen,
  newMessageAlert,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}
    >
      <div
        className="flex items-center p-4  border-b-2 border-solid border-black relative gap-2"
        style={{
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          transform: sameSender ? "translateY(-5px)" : "translateY(0)",
          opacity: sameSender ? 1 : 0.8,
          transition:
            "background-color 0.3s ease, color 0.3s ease, transform 0.4s ease-out, opacity 0.4s ease-out",
        }}
      >
        <AvatorCard avator={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count}New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
