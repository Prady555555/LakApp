import { Grid, Skeleton, Stack } from "@mui/material";

const Loader = () => {
  return (
    <div>
      <Grid container style={{ height: "calc(100vh - 4rem)" }} spacing={"1rem"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          height={"100%"}
        >
          <Skeleton variant="reactangular" height={"100vh"} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
          <Stack spacing={"0.5rem"}>
            {Array.from({ length: 10 }).map((item, index) => (
              <Skeleton key={index} variant="reactangular" height={"10rem"} />
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Skeleton variant="reactangular" height={"100vh"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Loader;
