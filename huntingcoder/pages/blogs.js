import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Blogs.module.css";
import axios from "axios";
import * as fs from "fs";
function Blogs({ allBlogs }) {
  const [blogs, setBlogs] = useState(allBlogs?.data);
  // useEffect(() => {
  //   // fetch("http://localhost:3000/api/blogs")
  //   //   .then((res) => {
  //   //     return res.json();
  //   //   })
  //   //   .then((parse) => {
  //   //     console.log(parse);
  //   //   });
  //   axios
  //     .get("http://localhost:3000/api/blogs")
  //     .then((res) => {
  //       setBlogs(res.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
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
          <h2>Famous Bologs</h2>
          {blogs.map((item) => (
            <div className={styles.blogsItems} key={item.slug}>
              <Link href={`/blogspost/${item.slug}`}>
                <h3>{item.title}</h3>
              </Link>
              <br />
              <p>{item.content.substr(0, 140)}</p>
            </div>
          ))}
          {/* <div className={styles.blogsItems}>
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

// This gets called on every request
// export async function getStaticProps(context) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/blogs`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
// export default Blogs;
