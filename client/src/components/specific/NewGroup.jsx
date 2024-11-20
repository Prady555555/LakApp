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
import { sampleUsers } from "../../containts/sampleData";
import UserItem from "./UserItem";
import { useInputValidation } from "6pp";
import { useState } from "react";
const NewGroup = () => {
  const [member, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemeberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  console.log(selectedMembers);
  const input = useInputValidation("");

  const closeHandler = () => {};

  const summitHandler = () => {
    console.log(selectedMembers);
  };

  return (
    <Dialog
      open
      sx={{
        textAlign: "center",
      }}
    >
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"} />
      <DialogTitle>New Group</DialogTitle>
      <TextField
        size="small"
        placeholder="Group Name"
        sx={{ m: "1rem" }}
        value={input.value}
        onChange={input.changeHandler}
      />
      <Stack>
        {member.map((i) => (
          <UserItem
            key={i._id}
            user={i}
            handler={selectMemeberHandler}
            isAdded={selectedMembers.includes(i._id)}
          />
        ))}
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} p={"1rem"}>
        <Button variant="contained" color="error" onClick={closeHandler}>
          Cancel
        </Button>
        <Button variant="contained" onClick={summitHandler}>
          Create
        </Button>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
