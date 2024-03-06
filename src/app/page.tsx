import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.app}>
      <p>TEzST</p>
      <Link href="/weather">날씨보기</Link>
    </div>
  );
}
