
const address = "";
const publicKey = "";

exports.balance = async(req, res) =>{
    try {
        const address = req.params.address;
        const publicKey = new PublicKey(address);
        const balance = await connection.getBalance(publicKey);
        res.status(200).json({ address, balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.sendTransaction = async(req, res) =>{
    
}