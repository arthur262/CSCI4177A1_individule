"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <main style={{ hieght: "fit-content" }}>
      <Button variant="text">
        <Link href="/single_news" style={{ justifyContent: "center" }}>
          Single_news
        </Link>
      </Button>
      <Button variant="text">
        <Link href="/user_dashboard" style={{ justifyContent: "center" }}>
          User_dashboard
        </Link>
      </Button>
    </main>
  );
}
