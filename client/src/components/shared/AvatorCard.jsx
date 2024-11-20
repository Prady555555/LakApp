import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import { TransformImage } from "../../lib/feature";

const AvatorCard = ({ avator = [], max = 4 }) => {
  return (
    <Stack>
      <AvatarGroup max={max} />
      <Box width={"5rem"} height={"3rem"}>
        {avator.map((src, index) => (
          <Avatar
            key={Math.random() * 100}
            src={TransformImage(src)}
            alt="avator"
            sx={{
              width: "3rem",
              height: "3rem",
              position: "absolute",
              border: "2px solid white",
              left: {
                xs: `${0.5 + index}rem`,
                sm: `${index}rem`,
              },
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AvatorCard;
