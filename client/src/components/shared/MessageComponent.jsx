import { Box, Typography } from "@mui/material";
import moment from "moment";
import { memo } from "react";
import { fileFormat } from "../../lib/feature";
import RenderAttachMent from "./RenderAttachMent";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const timeAgo = moment(createdAt).fromNow();
  const sameSender = sender?._id === user?._id;
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "blue" : "gray",
        color: sameSender ? "white" : "black",
        padding: "1rem",
        borderRadius: "1rem",
        maxWidth: "60%",
        wordBreak: "break-word",
        position: "relative",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography
          style={{
            position: "absolute",
            top: "-1.2rem",
            left: "-0.5rem",

            fontSize: "0.8rem",
            color: "gray",
          }}
          variant="caption"
        >
          {sender?.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachMent(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption">{timeAgo}</Typography>
    </div>
  );
};

export default memo(MessageComponent);
