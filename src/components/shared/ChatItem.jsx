import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../styles/StyledComponets";
import { memo } from "react";

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
        }}
      >
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
