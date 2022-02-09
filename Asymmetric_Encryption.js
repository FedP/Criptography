const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./Symmetric_Encryption");


const message = toString("life is now");

const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from(message),
);

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString("utf-8"));
