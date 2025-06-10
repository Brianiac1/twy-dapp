import React, { useState } from 'react';
import { ethers } from 'ethers';
import presaleABI from '../abis/TWYPresale.json';

const PRESALE_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_CONTRACT!;

export default function BuyTWY() {
  const [ethAmount, setEthAmount] = useState('');

  async function buyWithETH() {
    if (!window.ethereum) return alert("Install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(PRESALE_ADDRESS, presaleABI, signer);
    const value = ethers.parseEther(ethAmount);
    const tx = await contract.buyWithETH({ value });
    await tx.wait();
    alert("Purchase successful");
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="ETH Amount"
        value={ethAmount}
        onChange={(e) => setEthAmount(e.target.value)}
        className="border px-3 py-2"
      />
      <button onClick={buyWithETH} className="bg-green-600 text-white px-4 py-2 ml-2">
        Buy $TWY
      </button>
    </div>
  );
}
