import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogs.module.css";
import { useRouter } from "next/router";
import * as fs from "fs";
import axios from "axios";
function Slug({ myBlog }) {
  // const router = useRouter();
  // const { slug } = router.query;
  console.log(myBlog);
  const [blog, setBlog] = useState(myBlog);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/api/getBlogs?slug=${slug}`)
  //     .then((res) => {
  //       setBlog(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className={styles.container}>
      <h1>{blog.title}</h1>
      <h2>{blog.author}</h2>
      <hr />
      <p>{blog.content}</p>
    </div>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-nextjs" } },
      { params: { slug: "learn-reactjs" } },
      { params: { slug: "learn-nodejs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  return {
      props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}
// export async function getStaticProps(context) {
//   // Fetch data from external API

//   console.log(context.params.slug);

//   const res = await fetch(
//     `http://localhost:3000/api/getBlogs?slug=${context.params.slug}`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
export default Slug;
