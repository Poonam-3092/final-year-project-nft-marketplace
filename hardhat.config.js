require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/GX7E-4s_6-vSs5puT9n01j9rpTDwCl97";
const NEXT_PUBLIC_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// const NEXT_PUBLIC_PROJECT_ID="2OrLq4cDpp1sRDV1uMuSnQgHPSN"
// const NEXT_PUBLIC_SECRECT_KEY="0d0867866dbd10e5d3200c6d9fa4308c"
// const NEXT_PUBLIC_SUBDOMAIN="https://vision-nft-market.infura-ipfs.io"
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //     accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //   },
  // },

    // fuji: {
    //   url: `NEXT_PUBLIC_POLYGON_MUMBAI_RPC`,
    //   accounts: [
    //     `0x${"NEXT_PUBLIC_PRIVATE_KEY"}`,
    //   ],
    // },
  // },
};
