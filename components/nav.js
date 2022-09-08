import Link from 'next/link'
import { Flex, Spacer } from '@chakra-ui/react'

export default function Nav() {
  return (
      <Flex direction="row" w="100%" p="5" bg="gray.300">
        <Spacer />
        <Link href="/">Step 1: Connect your wallet</Link>
        <Spacer />
        <Link href="/check-token">Step 2: Check your balance</Link>
        <Spacer />
        <Link href="/token-holders">Step 3: Enter sender address and amount to send</Link>
        <Spacer />
        <Link href="/metadata-example">Step 4: Submit transaction</Link>
        <Spacer />
        <Link href="/transactions">Contact</Link>
        <Spacer />
      </Flex>
  )
}