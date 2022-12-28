import React from "react";
import Link from "next/link";
import styles from "../styles/Blogs.module.css";
function Blogs() {
  return (
    <>
      <style jsx>
        {`
          h2 {
            font-size: 38px;
            margin-bottom: 15px;
          }
          h3 {
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>
      <div className={styles.container}>
        <div className={styles.blogs}>
          <div className={styles.blogsItems}>
            <h2>Famous Bologs</h2>
            <Link href={"/blogspost/nextjs"}>
              <h3>How to Start with Next JS</h3>
            </Link>
            <br />
            <p>Next JS is a framwork of React JS</p>
          </div>
          <div className={styles.blogsItems}>
            <h3>How to Start with Next JS</h3>
            <br />
            <p>Next JS is a framwork of React JS</p>
          </div>
          <div className={styles.blogsItems}>
            <h3>How to Start with Next JS</h3>
            <br />
            <p>Next JS is a framwork of React JS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
