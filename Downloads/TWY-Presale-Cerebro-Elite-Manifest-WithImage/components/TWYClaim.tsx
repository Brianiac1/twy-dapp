import React from 'react';
import { ethers } from 'ethers';
import presaleABI from '../abis/TWYPresale.json';

const PRESALE_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_CONTRACT!;

export default function TWYClaim() {
  async function claim() {
    if (!window.ethereum) return alert("Install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(PRESALE_ADDRESS, presaleABI, signer);
    const tx = await contract.claimTokens();
    await tx.wait();
    alert("Claimed successfully!");
  }

  return (
    <div>
      <button onClick={claim} className="bg-purple-600 text-white px-4 py-2">
        Claim $TWY
      </button>
    </div>
  );
}
