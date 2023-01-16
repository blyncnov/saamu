import React, { useState } from "react";

import { useParams } from "react-router-dom";

import Phrase from "./phrase";
import JsonPage from "./json";
import Keystore from "./keystore";

const Token = () => {
  const [component, setComponent] = useState("Phrase");
  let { name } = useParams();

  function clickHandler(component) {
    switch (component) {
      case "Phrase":
        setComponent("Phrase");
        break;
      case "Private":
        setComponent("Private");
        break;
      case "Keystore":
        setComponent("Keystore");
        break;
      default:
        setComponent("Phrase");
    }
  }

  return (
    <>
      <div className="overall__phase">
        <div className="phase__container">
          <h2
            style={{ textAlign: "start", color: "black", fontWeight: 700 }}
            className="phase__font"
          >
            Import & Encrypt Wallet
          </h2>
          <br />
          <div className="phase__flex">
            <button className="phase__key">
              <li
                style={{ color: "black", cursor: "pointer", fontWeight: "500" }}
                onClick={() => clickHandler("Phrase")}
              >
                Phrase{" "}
              </li>
            </button>

            <button className="phase__key">
              <li
                style={{ color: "black", cursor: "pointer", fontWeight: "500" }}
                onClick={() => clickHandler("Private")}
              >
                Private
              </li>
            </button>

            <button className="phase__key">
              <li
                style={{ color: "black", cursor: "pointer", fontWeight: "500" }}
                onClick={() => clickHandler("Keystore")}
              >
                Keystore{" "}
              </li>
            </button>
          </div>

          {component === "Phrase" && <Phrase wallet={name} />}
          {component === "Keystore" && <Keystore wallet={name} />}
          {component === "Private" && <JsonPage wallet={name} />}
        </div>
      </div>
    </>
  );
};

export default Token;
