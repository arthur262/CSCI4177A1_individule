"use client";
import React from "react";
import Header from "@/components/header_login";
import styles from "@/style/header.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import News_list from "@/components/news_list";
import jsondata from "@/pages/api/data.json";
const data = jsondata.data;


export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = React.useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setInterval(function () {
      var time = new Date();
      setCount(time.toLocaleTimeString());
    }, 900);
  });
  return (
    <div style={{ hieght: "fit-content" }}>
      <Header></Header>
      <div className={styles.container}>
        {/* no content larger than 1024px */}
        <div style={{ maxWidth: "1024px" }}>
          <Box>
            <Grid container spacing={12} sx={{ marginTop: "0px" }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" sx={{ whiteSpace: "nowrap" }}>
                  Current Time:
                </Typography>
                <Typography variant="h3">{count}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">COMP</Typography>
                <Typography variant="h5"> NASDAQ composite index</Typography>
                <Grid container spacing={2} sx={{ marginTop: "2vh" }}>
                  <Grid item xs={4}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "var(--color-up)",
                      }}
                    >
                      {" "}
                      11621.71
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "var(--color-up)",
                      }}
                    >
                      +109.31 +0.95%
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* market data */}
          <Box>
            <Typography variant="h4" sx={{ marginTop: "2vh" }}>
              Market
            </Typography>
            <Grid container spacing={6}>
              {data.map((element) => (
                <Grid item xs={12} md={6} key={element.company}>
                  <Grid container sx={{ margin: "0 32px" }}>
                    <Grid item xs={4}>
                      <Typography variant="h5">{element.company}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h5">{element.price}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {element.Change > 0 ? (
                        <Typography
                          variant="h5"
                          style={{ color: "var(--color-up)" }}
                        >
                          + {element.Change} %
                        </Typography>
                      ) : (
                        <Typography
                          variant="h5"
                          style={{ color: "var(--color-down)" }}
                        >
                          {element.Change} %
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
          <News_list />
        </div>
      </div>
    </div>
  );
}
