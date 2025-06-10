import React from 'react';
import Head from 'next/head';
import ConnectWallet from '../components/ConnectWallet';
import BuyTWY from '../components/BuyTWY';

export default function Home() {
  return (
    <>
      <Head><title>TWY Presale</title></Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6">TWY Presale</h1>
        <ConnectWallet />
        <BuyTWY />
      </main>
    </>
  );
}
