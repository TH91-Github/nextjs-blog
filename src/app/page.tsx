import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.app}>
      <h1>dddzz</h1>
      <Link href="/movie">movie 보기</Link>
      <Link href="/weather">weather 보기</Link>
    </div>
  );
}
