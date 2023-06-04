import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/hero.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            excepturi.
          </p>
        </div>
      </Link>

      <Link href="/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/hero.png"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
            excepturi.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
