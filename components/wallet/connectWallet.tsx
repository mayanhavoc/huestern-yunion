import { useEffect, useState } from 'react';
import type { Wallet } from '@martifylabs/mesh';
import { WalletService } from '@martifylabs/mesh';
import useWallet from '../../contexts/wallet';

import { Button } from '@chakra-ui/react';

export default function ConnectWallet() {
    const { connecting, walletNameConnected, connectWallet, walletConnected } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[] | undefined>(undefined);

    useEffect(() => {
        async function init() {
            setAvailableWallets(WalletService.getInstalledWallets());
        }
        init();
    }, []);

    return (
        <>
            {availableWallets
                ? availableWallets.length == 0
                    ? 'No wallets found'
                    : availableWallets.map((wallet, i) => (
                        <Button key={i} px='5' mx='5' onClick={() => connectWallet(wallet.name)} colorScheme='purple'>
                            Connect with {wallet.name}
                        </Button>
                    ))
                : ''}
        </>
    );
}