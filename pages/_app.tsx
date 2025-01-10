import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { Chain } from "@thirdweb-dev/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import Head from "next/head";

// Define your custom chain
const customChain: Chain = {
  chain: "ETH",
  chainId: 20143, // Your custom chain ID
  name: "Monad Devnet",
  rpc: [
    "https://rpc-devnet.monadinfra.com/rpc/3fe540e310bbb6ef0b9f16cd23073b0a",
  ],
  nativeCurrency: {
    name: "Monad",
    symbol: "DMON",
    decimals: 18,
  },
  explorers: [
    {
      url: "https://explorer.monad-devnet.devnet101.com",
      name: "Monad devnet explorer",
      standard: "none",
    },
  ],
  shortName: "monad",
  slug: "monad",
  testnet: true,
};

// This is the chainId your dApp will work on.
const activeChainId = customChain.chainId;
// This is the chainId your dApp will work on.
// const activeChainId = ChainId.Sepolia;
const queryClient = new QueryClient();
// da80524de436716df3e7c21106b666ed 5ec9d980533be21c962580687677c0f9

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider
        secretKey="sx26XL_aTHOHv0BEX4IFPYYLL_4VfsTsXpQkyJP_WsTgC_ndNm3mis3jB2vSOsQj96svIEvDYmjfYbhKUo-tqg"
        activeChain={customChain}
        clientId="da80524de436716df3e7c21106b666ed"
        queryClient={queryClient}
      >
        <Head>
          <title>Nads ID</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="NFT Drop minting page" />
          <meta
            name="keywords"
            content="Thirdweb, thirdweb NFT drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
          />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
