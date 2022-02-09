const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  console.log("salt : " + salt);

  const hashedPassword = scryptSync(password, salt, 64).toString("hex");
  console.log("hashedPassword: " + hashedPassword);

  const user = { email, password: `${salt}:${hashedPassword}` };
  console.log(user.password);

  users.push(user);

  return user;
}

signup("fed@icloud.com", "asd123-");

function login(email, password) {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);
}
