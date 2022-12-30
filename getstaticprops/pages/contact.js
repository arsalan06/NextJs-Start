import React from "react";
import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
function Contact() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    console.log(data);
    axios.post("http://localhost:3000/api/postcontact/", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <span className={styles.fieldContainer}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              {...register("firstName", {
                required: "Please enter your first name.",
              })}
              className={styles.field}
              tabIndex="1"
            />
          </span>
          <span className={styles.fieldContainer}>
            <label htmlFor="lastName" className={styles.label}>
              Last name
            </label>
            <br />
            <input
              type="text"
              name="name"
              {...register("lastName", {
                required: "Please enter your first name.",
              })}
              className={styles.field}
              tabIndex="2"
            />
          </span>
          <span className={styles.fieldContainer}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number
            </label>
            <br />
            <input
              {...register("phoneNumber", {
                required: "Please enter your first name.",
              })}
              type="text"
              name="phoneNumber"
              className={styles.field}
              tabIndex="2"
            />
          </span>

          <span className={styles.fieldContainer}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <br />
            <input
              {...register("email", {
                required: "Please enter your first name.",
              })}
              type="email"
              name="email"
              className={styles.field}
              tabIndex="2"
            />
          </span>
          <span className={styles.fieldContainer}>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Contact;
