import {
  Add,
  GroupAdd,
  Logout,
  Notifications as NotificationIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Backdrop,
  Box,
  Icon,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notfication"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);

  const navigate = useNavigate();
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const navigateToGroups = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" />
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Lak App
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <IconButton color="inherit" onClick={handleMobile}>
              <Menu />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              Icon={SearchIcon}
              title="search"
              onClick={openSearchDialog}
            />
            <IconBtn Icon={Add} title="New Group" onClick={openNewGroup} />
            <IconBtn
              Icon={NotificationIcon}
              title="Notification"
              onClick={openNotification}
            />
            <IconBtn
              Icon={GroupAdd}
              title="Manage Groups"
              onClick={navigateToGroups}
            />
            <IconBtn Icon={Logout} title="Logout" onClick={logoutHandler} />
          </Box>
        </Toolbar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ Icon, title, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default Header;
