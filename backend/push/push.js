const express = require("express");
const EpnsAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Replace with your Ethereum wallet's private key
const epnsPK = "0x1234567890abcdef01234567890abcdef01234567890abcdef01234567890abcdef";


// Replace with your EPNS channel address
const channelAddress = "0xf9E96A81bB67350b25dE76f696fb42A8FE5CC3D0";

const signer = new ethers.Wallet(epnsPK);

app.post("/send-channel-notification", async (req, res) => {
    try {
        const apiResponse = await EpnsAPI.payloads.sendNotification({
            signer,
            type: 1, // Channel
            identityType: 2, // Direct payload
            notification: {
                title: req.body.title || "Channel Notification Title",
                body: req.body.body || "Channel Notification Body",
            },
            payload: {
                title: req.body.title || "Channel Notification Title",
                body: req.body.body1 || "Channel Notification Body",
                body: req.body.body2 || "Hey! champ dont think to much its coming soon...",
                body: req.body.body3 || "Oops!!! WE think now it's time to consult ",
                cta: req.body.cta || "https://example.com",
                img: req.body.img || "https://example.com/image.jpg",
            },
            recipients: eip155: 1: ${ channelAddress }, // Ethereum mainnet
            channel: eip155: 1: ${ channelAddress }, // Ethereum mainnet
            env: "production", // Or "staging" for the staging environment
        });

if (apiResponse?.status === 204) {
    res.status(200).json({ message: "Channel notification sent successfully!" });
} else {
    res.status(500).json({ error: "Failed to send channel notification." });
}
    } catch (err) {
    res.status(500).json({ error: err.message });
}
});

app.listen(port, () => {
    console.log(Server is running on port ${ port });
});