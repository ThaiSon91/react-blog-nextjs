import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title blog post</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </p>
          <div className={styles.author}>
            <Image
              src="/contact.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Thai Son</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cupiditate soluta eius ea neque aspernatur, hic adipisci nihil
          corrupti reprehenderit repellendus alias possimus assumenda optio
          quibusdam! Voluptate officiis vel voluptatibus!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
