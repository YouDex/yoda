module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        //        test: {
        //            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
        //            network_id: "3" // Match any network id
        //        }

    }
};