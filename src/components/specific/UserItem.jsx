import { Add, Close } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded }) => {
  const { name, _id, avator } = user;
  return (
    <ListItem>
      <Stack
        sx={{
          direction: "flex",
          alignItems: "center",
          width: "100%",
        }}
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
      >
        <Avatar src={avator} />
        <Typography
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",

            width: "100%",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          {name}
        </Typography>
        <IconButton
          size="small"
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",

            "&:hover": {
              backgroundColor: isAdded ? "error.main" : "primary.main",
            },
          }}
        >
          {isAdded ? (
            <Close />
          ) : (
            <Add
              sx={{
                bgcolor: "error",
              }}
            />
          )}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
