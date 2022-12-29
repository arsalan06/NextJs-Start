import React, { useEffect, useState } from "react";
import styles from "../../styles/Blogs.module.css";
import { useRouter } from "next/router";
import axios from "axios";
function Slug({ data }) {
  // const router = useRouter();
  // const { slug } = router.query;
  console.log(data);
  const [blog, setBlog] = useState(data);
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
export async function getServerSideProps(context) {
  // Fetch data from external API

  console.log(context.query.slug);

  const res = await fetch(`http://localhost:3000/api/getBlogs?slug=${context.query.slug}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Slug;
