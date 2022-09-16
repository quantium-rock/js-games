// EXAMPLE :


// get wallet provider, phantom
const get_provider = () => {
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            return provider;
        }
    }
    window.open("https://phantom.app/", "_blank");
};

// get balance from connected Phantom wallet
async function phantom_balance() {
    // alt window.solana
    const phantom = get_provider();
    console.log("Wallet Connected: " + phantom.isConnected);
    if (phantom.isConnected !== false) {

        const wallet = phantom.publicKey;
        const wallet_b58 = phantom.publicKey.toString();

        // connect to the cluster
        console.log("Connecting Cluster");
        var connection = new solanaWeb3.Connection(
            solanaWeb3.clusterApiUrl('devnet'),
            'confirmed',
        );

        // remember, do not use base 58 encoded key with getBalance();
        console.log("Getting Balance: " + wallet_b58);
        let _balance = await connection.getBalance(wallet)
            .then(function (data) {
                console.log("Wallet Balance: " + data);
                return data;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });

    }
}

export default phantom_balance;