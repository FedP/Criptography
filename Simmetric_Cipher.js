const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");
// IV = Initial Vector
// Cipher

const message = "I love dolphines";
const key = randomBytes(32);
console.log("Key : "+key);
const iv = randomBytes(16);
console.log("iv : "+iv);

const cipher = createCipheriv("aes256", key, iv);

// Encrypt

const encryptedMessage = cipher.update(message, "utf8", "hex")
                + cipher.final("hex"); // Value added at the end of the encrypted message
                // So this cipher can no longer be used to encrypt data.
console.log("encryptedMessage : "+encryptedMessage);


// Decrypt

const decipher = createDecipheriv("aes256", key. iv);
const decryptedMessage = decipher.update(encryptedMessage, "hex", "utf-8")
                + decipher.final(`undeciphered: ${decryptedMessage.toString("utf-8")}`);
console.log("decryptedMessage : "+decryptedMessage);
