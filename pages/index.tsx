import {
  Box, Heading, Text, Spinner, Center
} from '@chakra-ui/react'
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import useWallet from '../contexts/wallet';
import ConnectWallet from '../components/wallet/connectWallet';

const Home: NextPage = () => {
  const { connecting, walletConnected, wallet } = useWallet();
  const [currentNetwork, setCurrentNetwork] = useState<"Testnet" | "Mainnet" | "Not Connected">("Not Connected");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {

    const fetchNetwork = async () => {
      const _network = await wallet.getNetworkId();
      if (_network === 0) {
        setCurrentNetwork("Testnet")
      }
      else if (_network === 1) {
        setCurrentNetwork("Mainnet")
      }
      setLoading(false);
    }

    if (walletConnected) {
      setLoading(true);
      fetchNetwork();
    }

  }, [walletConnected, wallet])

  return (
    <Box>
      <Heading as='h1' size='3xl' noOfLines={1} mb={1}>
        Huestern Yunion
      </Heading>
      <Text fontSize='xl' noOfLines={1} mb={4}>
        Huestern Yunion helps businesses in Latin America get paid by anyone, anywhere in the
        world.
      </Text>
      <Heading>
        Step 1: Check your connection
      </Heading>
      <Box m={4}>
        <ConnectWallet/>
      </Box>
      <Box m='5' p='5' bg='teal.700' color='white'>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <>
            {walletConnected ?
              (
                <Box w='80%' mx='auto' my='5' p='5' bg='green.100' color='black'>
                  <Text fontSize='xl'>Congratulations! You are connected to {walletConnected} wallet on {currentNetwork} </Text>
                </Box>
              ) : (
                <Box w='80%' mx='auto' my='5' p='5' bg='red.100' color='black'>
                  <Text fontSize='xl'>No wallet is connected yet. </Text>
                </Box>
              )
            }
          </>
        )}
      </Box>
    </Box>
  )
}

export default Home
