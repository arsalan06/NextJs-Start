import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <style jsx>
        {`
          h1 {
            margin-top: 20px;
            text-align: center;
          }
          h3 {
            margin-top: 20px;
            margin-bottom: 15px;
          }
        `}
      </style>

      <div className={styles.container}>
        <h1>About Hunting Coder</h1>
        <h3>Introduction</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aut?
          Quis quibusdam dicta similique, esse illo, eveniet error libero
          possimus commodi cupiditate doloremque consequuntur quia excepturi
          aut. In, illum recusandae.
        </p>
        <h3>About</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aut?
          Quis quibusdam dicta similique, esse illo, eveniet error libero
          possimus commodi cupiditate doloremque consequuntur quia excepturi
          aut. In, illum recusandae.
        </p>
        <h3>Contact</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aut?
          Quis quibusdam dicta similique, esse illo, eveniet error libero
          possimus commodi cupiditate doloremque consequuntur quia excepturi
          aut. In, illum recusandae.
        </p>
      </div>
    </>
  );
}

export default About;
