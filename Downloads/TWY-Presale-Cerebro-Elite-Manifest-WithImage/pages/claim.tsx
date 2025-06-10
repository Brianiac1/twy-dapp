import React from 'react';
import TWYClaim from '../components/TWYClaim';

export default function Claim() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Claim $TWY Tokens</h1>
      <TWYClaim />
    </div>
  );
}
