require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain mistake hidden arena fog story'; 
let testAccounts = [
"0xca2372a810cdc6aeb62fd64cf06531d55db2bd4aacd025071eab1822e54ced99",
"0xb7e0e3a65e24b1f0ca73c42f60aace8d474f0eb2c8823aea93620a463ff7ef7c",
"0x3eb2069fa8b2b04b90b205f7544f8d783ae189fb8ea745d6823a8d305e80a590",
"0x3895995240739530a38de03192c892d16d886783d02f75b8f491e73155167b9e",
"0x0c8b5ecfbd678e5903a283a319a7a5fd466a43827090f314b17d6f995369115a",
"0xfde8eaccb1922a8e2bdd936440f59d6ac7b450476755658984d3db202f239c94",
"0xe0496e00d2dacf8a0a3bceaa1aa64acf1252ff086368349994aecf303eea1245",
"0xd21f0de41d14a2cd146eac7f68fbb27c5bcd4b7fc2c4c51cc10f0dbc14c64c5c",
"0x561144ea61a26e27ee50faeb35e1813b49a8aa47e9eb40de779ef7c12bed52be",
"0xff8f7e8d646ed3996919afea1a2a204db4e0658f8573b8ae9e50fbd3de107bdc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
