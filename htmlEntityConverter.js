
function convertHTML (str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  let result = "";

  for (const char of str) {
    result += htmlEntities[char] ?? char
  }

  return result
}

console.log(convertHTML("Dolce & Gabbana"))