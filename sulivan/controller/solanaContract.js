
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
    try {
        const { from, to, amount } = req.body;
        const fromPublicKey = new PublicKey(from);
        const toPublicKey = new PublicKey(to);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: fromPublicKey,
                toPubkey: toPublicKey,
                lamports: amount * LAMPORTS_PER_SOL,
            })
        );

        // Assinar e enviar a transação
        const signature = await connection.sendTransaction(transaction, []);
        await connection.confirmTransaction(signature);

        res.status(200).json({ signature });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}