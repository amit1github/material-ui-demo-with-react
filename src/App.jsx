import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  CardContent,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useStyles from "./styles";

const Cards = [1, 2, 3, 4, 5, 6, 7, 8];

const App = () => {
  const classes = useStyles();

  const currentYear = new Date().getFullYear()


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet elit. Dolorum distinctio ab optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, aspernatur.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.btn} color="primary">
                    Styled with Hook API
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {Cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    title="image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure nihil culpa quas! Lorem adipisicing elit. Quos,
                      dolorum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm" color="primary">
                      Edit
                    </Button>
                    <Button size="sm" color="primary">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className="classes.footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>

        <Typography variant="subtitle1" align="center" color="textSecondary">
           {currentYear} 🔵Credits: <a href="https://www.youtube.com/watch?v=Xoz31I1FuiY">@material-ui</a> | <a href="https://www.youtube.com/watch?v=Xoz31I1FuiY">JavascriptMastery</a> 
        </Typography>
      </footer>
    </>
  );
};

export default App;

// link for material icons
// https://mui.com/components/material-icons/