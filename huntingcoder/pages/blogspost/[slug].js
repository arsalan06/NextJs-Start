import React from "react";
import styles from "../../styles/Blogs.module.css";
import { useRouter } from "next/router";
function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <p>
        Currently, if you set a revalidate time of 60, all visitors will see the
        same generated version of your site for one minute. The only way to
        invalidate the cache was from someone visiting that page after the
        minute had passed. You can now manually purge the Next.js cache for a
        specific page on-demand.
      </p>
    </div>
  );
}

export default Slug;
