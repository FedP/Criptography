const { createHash, Hash } = require("crypto"); 

function hash(input) {
    // Can decide both the algorithm (sha256) and the output type (hex)
    return createHash("sha256").update(input).digest("hex");
}

let password = "hi-mom!";
const hash1 = hash(password);
console.log(hash1);
