import React from "react";
// import Banner from "../banner.png";

const New = () => {
  return (
    <div>
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
      <br />
      <h1 className="node">Wallets</h1>
      <br />

      <h2 className="cent bkg">
        Multiple iOS and Android wallets support the DeFi Protocol. Simply
        select your wallet to start securely using a dApp. Interaction between
        mobile apps and mobile browsers are supported via mobile deep linking.
      </h2>
    </div>
  );
};

export default New;
