import { Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
function ResourcesPage() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Grid
      component="main"
      sx={{ flexGrow: 1, p: 3 }}
      justifyContent="center"
      container
    >
      <DrawerHeader />
      <Grid
        justifyContent="center"
        item
        xs={12}
        md={12}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid justifyContent="center" container>
          <Typography gutterBottom variant="h4">
            Resources used:
          </Typography>
        </Grid>
        <Grid justifyContent="center" container>
          <Card
            sx={{
              margin: 2,
              minWidth: 350,
              minHeight: 150,
              height: 300,
              background: "#051622",
              border: 1,
              borderColor: "#1BA098",
              overflow: "auto",
            }}
          >
            <CardContent sx={{ color: "#1BA098", textAlign: "center" }}>
              <Typography gutterBottom variant="h5">
                packages used:
              </Typography>
              <Typography variant="h6">Jisho-Unofficial API</Typography>
              <Typography gutterBottom>
                https://mistval.github.io/unofficial-jisho-api/
              </Typography>
              <Typography variant="h6">express</Typography>
              <Typography gutterBottom>
                https://www.npmjs.com/package/express
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid justifyContent="center" container>
          <Card
            sx={{
              margin: 2,
              minWidth: 350,
              minHeight: 150,
              height: 300,
              background: "#051622",
              border: 1,
              borderColor: "#1BA098",
              overflow: "auto",
            }}
          >
            <CardContent sx={{ color: "#1BA098", textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                Audio system used:
              </Typography>
              <Typography variant="h6">VoiceVox</Typography>
              <Typography>https://voicevox.hiroshiba.jp/</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid justifyContent="center" container>
          <Card
            sx={{
              margin: 2,
              minWidth: 350,
              minHeight: 150,
              height: 300,
              background: "#051622",
              border: 1,
              borderColor: "#1BA098",
              overflow: "auto",
            }}
          >
            <CardContent sx={{ color: "#1BA098", textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                DataBank for scripts page:
              </Typography>
              <Typography variant="h6">SelfMade</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default ResourcesPage;
