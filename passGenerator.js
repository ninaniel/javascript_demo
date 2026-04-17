
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generatePassword (len) {
  if (len <= 0) {
    return ""
  }
  let pass = "";
  for (let i = 0;  i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)]
  }
  return pass
}

const password = generatePassword(28)

console.log(`Generated password: ${password}`)