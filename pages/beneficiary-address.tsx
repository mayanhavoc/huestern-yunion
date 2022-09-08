import {
    Box,
    Heading,
    Text,
    Spinner,
    Center,
    Button,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Tooltip, 
    useColorModeValue
  } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import useWallet from '../contexts/wallet';
    
const BeneficiaryAddr: NextPage = () => {
    const { beneficiaryAddr, settBeneficiaryAddress } = useState<String | undefined>(undefined);
//   const { connecting, walletNameConnected, connectWallet, walletConnected, wallet } = useWallet();
//   const [assets, setAssets] = useState<null | any[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

    
//   async function getAssets() {
//     if (wallet) {
//       setLoading(true);
//       const _assets = await wallet.getAssets();
//       setAssets(_assets);
//       setLoading(false);
//     }
//   }

  return (
    <div>
      <Heading as='h1' size='xl' noOfLines={1} mb={4}>Which address would you like to send assets to?</Heading>
      <Box 
        m={4}
        p={12}
        bg='gray.50'>
        <FormControl>
            <FormLabel><Heading bg='tomato' as='h2' size='xl'>Click on the text below to enter beneficiary's address</Heading></FormLabel>
            <Editable my={6} defaultValue='Beneficiary address'>
            <Tooltip label="Click to edit">
              <EditablePreview 
                py={2}
                px={4}
                _hover={{background: useColorModeValue("gray.100", "gray.700")}}
              />
            </Tooltip>
              <EditableInput />
            </Editable>
        </FormControl>
        <Button my='6' px='12' colorScheme='blue'>Submit</Button>
      </Box>
    </div>
  );
};

export default BeneficiaryAddr
  