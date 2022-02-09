const { createHmac } = require("crypto");

const key = "super-secret!";
const message = "sunny sunday";

const hmac = createHmac("sha256", key).update(message).digest("hex");
// We get the same hash if the same password is used

console.log(hmac);

const key2 = "other-password";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");
// Different password aka key, different hash

console.log(hmac2);
