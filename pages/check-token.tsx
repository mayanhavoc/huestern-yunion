import {
  Box, Heading, Text, Spinner, Center, Button
} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import useWallet from '../contexts/wallet';

// You can change this policyId to match any token.
// 1. Try changing it to match a token that you minting in Module 201
// 2. Can you get this page to work with a token on Cardano mainnet?
const policyId = "1309921891e459c7e9acb338d5dae18f98d1c2f55c1852cd5cf341f9"

const CheckToken: NextPage = () => {
  const { connecting, walletNameConnected, connectWallet, walletConnected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  return (
    <div>
      <Heading as='h1' size='3xl' noOfLines={1} mb={4}>Check wallet balance </Heading>
      <Text fontSize='xl' noOfLines={1} mb={4}>
        View the assets available in your connected wallet.
      </Text>
      <Box m={4}>
      {walletConnected && (
        <>
          {assets ? (
            <pre>
              <code className="language-js">
                {JSON.stringify(assets, null, 2)}
              </code>
            </pre>
          ) : (
            <Button
              type="button"
              onClick={() => getAssets()}
              disabled={connecting || loading}
              style={{
                margin: "8px",
                backgroundColor: connecting || loading ? "orange" : "blue",
                color: "whitesmoke"
              }}
            >
               Check balance
            </Button>
          )}
        </>
      )}
      </Box>
    </div>
  );
};

export default CheckToken
