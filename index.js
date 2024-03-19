const tea_arboretum_indexer = require('tea-arboretum-indexer');
const tea_potbot_gen = require('tea-potbot-gen');
const commander = require('commander');
const multer = require('multer');
const web3_react = require('web3-react');
const web3 = require('web3');
const validator = require('validator');
const react_redux = require('react-redux');
const sinon = require('sinon');
const debug = require('debug');
const mysql = require('mysql');
const mongoose = require('mongoose');
const mocha = require('mocha');
const dotenv = require('dotenv');
const request = require('request');

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

// Perform batch requests to Ethereum node
const batch = new web3.BatchRequest();

batch.add(web3.eth.getBalance.request('0x1234567890123456789012345678901234567890', 'latest', (err, balance) => {
  if (!err) {
    console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
  } else {
    console.error('Error getting balance:', err);
  }
}));

batch.execute();

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const fs = require('fs');
fs.watchFile('target.txt', (curr, prev) => {
  console.log('File changed:', curr.mtime, prev.mtime);
});

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(10));