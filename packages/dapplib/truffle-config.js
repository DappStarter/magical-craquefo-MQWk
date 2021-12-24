require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth miss equip imitate private flower tattoo'; 
let testAccounts = [
"0xb0a24c3864689e989f0a0239ce151f1ed153de81c6bff31f97f36404ba1d4707",
"0x87433226a4a2512eb3914807aa93b6e1b9d4deb6695fd413724bb032367565c1",
"0x0ff61ca16cc2654871d48421bc95b17f23fb0960607b33f1bcc28a669b391473",
"0x16119fd8bd9509b1cc995d51c4c4632c62ae9feb86e3512703b67ab773e0fc14",
"0x7baa2c69d551fc126fa47c238154dc188da58619101314f9b4abcb3d1bb75108",
"0x8b77e7ce6000c401ee6d95fbbd9cb3acd7151a4ccb6bc7b05db4cf1bf318d79b",
"0x40c92b2f7c142c5597dbd8f4b9dbe7f213bdf3adca38f34bce99054299a1b761",
"0xedea8d2aae207f69d7f526cbe13dda199ebff79c3105d3b1e01c7e77d6b9915e",
"0x8d5c5e772b2fe71358a63d9a803f4120e6909b3e16e43bc07491147fd33b91c0",
"0x68734e559bbec5855b36c8e1c4cc78a3643bd958eaffc37ecc32545140d6658d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


