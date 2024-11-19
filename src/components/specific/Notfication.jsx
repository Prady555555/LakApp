import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  InputAdornment,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleNotifications } from "../../containts/sampleData";
import { Add, CenterFocusStrong } from "@mui/icons-material";
import { memo } from "react";

const Notfication = () => {
  const friendisRequestHandler = ({ _id, accept }) => {
    console.log(_id, accept);
  };
  return (
    <Dialog
      open={true}
      sx={{
        textAlign: "center",
      }}
    >
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"} />
      <DialogTitle>Notifications</DialogTitle>
      {sampleNotifications.length > 0 ? (
        sampleNotifications.map(({ sender, _id }) => (
          <NotificationItem
            key={_id}
            sender={sender}
            _id={_id}
            handler={friendisRequestHandler}
          />
        ))
      ) : (
        <Typography textAlign={"center"}>No Notification</Typography>
      )}
    </Dialog>
  );
};

const NotificationItem = ({ sender, _id, handler }) => {
  const { name, avator } = sender;
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
            bgcolor: "red",
            width: "100%",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          {`${name} `}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>accept</Button>
          <Button onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default memo(Notfication);
