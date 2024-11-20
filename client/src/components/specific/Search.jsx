import {
  Dialog,
  DialogTitle,
  InputAdornment,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { SearchRounded } from "@mui/icons-material";
import UserItem from "./UserItem";
import { useState } from "react";
import { sampleUsers } from "../../../src/containts/sampleData";
const Search = () => {
  const input = useInputValidation("");
  const [users, setUsers] = useState(sampleUsers);
  let isLoadingSendFriendRequest = false;
  const addFriendHandler = (_id) => {
    console.log(_id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label="Search"
          variant="outlined"
          value={input.value}
          size="small"
          onChange={input.changeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            ),
          }}
        />
        {users.map((i) => (
          <UserItem
            key={i._id}
            user={i}
            handler={addFriendHandler}
            handlerIsLoading={isLoadingSendFriendRequest}
          />
        ))}
      </Stack>
    </Dialog>
  );
};

export default Search;
