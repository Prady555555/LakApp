import { CalendarMonth, Email, Face } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack className="flex items-center p-4 ">
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          border: "5px solid white",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        }}
      />
      <ProfileCard
        heading={"Bio"}
        text={`A passionate Full Stack Developer with experience in developing dynamic web applications . `}
      />
      <ProfileCard heading={"Username"} text={`Prady@2002 `} Icon={<Face />} />
      <ProfileCard
        heading={moment("2024-11-18T00:00:00.000Z").fromNow()}
        text={`S.pradeepDurai`}
        Icon={<CalendarMonth />}
      />
    </Stack>
  );
};

const ProfileCard = ({ Icon, text, heading }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        margin: "1rem 0",
        color: "white",
      }}
    >
      {Icon && Icon}
      <Stack className="flex flex-col">
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption">{heading}</Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
