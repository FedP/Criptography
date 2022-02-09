const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./Symmetric_Encryption");

const message = "this data must be signed";

// SIGN

const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey);

// VERIFY

const verifier = createVerify("rsa-sha256");

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");
