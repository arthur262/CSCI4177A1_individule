/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "@/style/header.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "@/components/header_login";
import News_list from "@/components/news_list";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import jsondata from "@/pages/api/data.json";
const data = jsondata.news_detail;

export default function page() {
  return (
    <div style={{ hieght: "fit-content" }}>
      <Header />
      <div className={styles.container}>
        {/* no content larger than 1024px */}
        <div style={{ maxWidth: "1024px" }}>
          <Box style={{ marginTop: "3vh" }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">{data.News_title}</Typography>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography variant="subtitle1">
                      CONTRIBUTOR:
                      <br />
                      {data.Contributer}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle1">
                      PUBLISHED:
                      <br />
                      {data.Published}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={0} md={2}></Grid>
              <Grid
                item
                xs={12}
                md={0}
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <img
                  alt="image"
                  src="https://58xiangmu.oss-us-west-1.aliyuncs.com/image.png"
                  width={200}
                  height={200}
                />
              </Grid>
              <Grid
                item
                xs={0}
                md={4}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <img
                  alt="image"
                  src="https://58xiangmu.oss-us-west-1.aliyuncs.com/image.png"
                  width={400}
                  height={400}
                />
              </Grid>
            </Grid>
          </Box>
          {/* Relative socks */}
          <Typography variant="h4">Relative socks</Typography>
          <Box className={styles.relative_stock}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h4">{data.Company}</Typography>
                <Typography variant="subtitle1">{data.Company_Name}</Typography>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography variant="subtitle1">
                      Previous Close: <br />
                      {data.Previous_Close}
                    </Typography>
                  </Grid>
                  <Grid item xs={0} md={2}></Grid>
                  <Grid item xs={7}>
                    <Typography variant="subtitle1" noWrap>
                      Day Range: <br />
                      {data.Day_Range}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ display: "right" }}>
                  <Typography variant="h5">{data.Price}</Typography>
                  <Typography variant="h6">{data.Price_up}</Typography>
                  {data.Change > 0 ? (
                    <Typography
                      variant="subtitle1"
                      style={{ color: "var(--color-up)" }}
                    >
                      + {data.Change}
                    </Typography>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      style={{ color: "var(--color-down)" }}
                    >
                      {data.Change}
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box style={{ marginTop: "3vh" }}>
            <Typography variant="subtitle1">
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
              {data.Detail}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            xs={{ padding: "16px 0" }}
            md={{ padding: "2vh 0" }}
          >
            More relative news
          </Typography>
          <News_list />
        </div>
      </div>
    </div>
  );
}
