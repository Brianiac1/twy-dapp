import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function ConnectWallet() {
  const [address, setAddress] = useState('');

  async function connectWallet() {
    if (!window.ethereum) return alert("MetaMask not detected");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAddress(accounts[0]);
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => connectWallet());
    }
  }, []);

  return (
    <div className="mb-4">
      <button onClick={connectWallet} className="bg-blue-600 text-white px-4 py-2">
        {address ? `Connected: ${address.slice(0, 6)}...` : "Connect Wallet"}
      </button>
    </div>
  );
}
