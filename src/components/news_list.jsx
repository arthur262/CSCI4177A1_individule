import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Image from "next/image";
import styles from "../style/header.module.css";
import jsondata from "@/pages/api/data.json";
const data = jsondata.newslist;
export default function news_list() {
  return (
    <div style={{ marginTop: "3vh" }}>
      {data.map((element) => (
        <div className={styles.mediacard} key={element.id}>
          <Link href="/single_news">
            <Grid container>
              <Grid item xs={12} md={7}>
                <Typography variant="h5">{element.news_title}</Typography>
                <Typography variant="h6">
                  {element.source} &emsp; {element.date}
                </Typography>
              </Grid>
              <Grid item xs={6} md={2}>
                <Typography variant="h6">
                  {element.relative_stock.company}
                </Typography>
                <Typography variant="h6">
                  {element.relative_stock.price}
                </Typography>
                {element.relative_stock.Change > 0 ? (
                  <Typography variant="h6" style={{ color: "var(--color-up)" }}>
                    + {element.relative_stock.Change} %
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    style={{ color: "var(--color-down)" }}
                  >
                    {element.relative_stock.Change}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={6} md={3}>
                <img
                  alt="image"
                  src="https://58xiangmu.oss-us-west-1.aliyuncs.com/image.png"
                  width={200}
                  height={100}
                />
              </Grid>
            </Grid>
          </Link>
        </div>
      ))}
    </div>
  );
}
