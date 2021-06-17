const { isParenthesis, arrayParenthesisIsBalanced } = require("./utils");

const isStringBalanced = function ([...characters]) {
  // Filtro sólo los paréntesis y se coloca en un array
  const arrayParenthesis = characters.filter(isParenthesis);
  // Evalúa si es balanceado, comparando el primero y el final, de forma recursiva
  const isBalanced = arrayParenthesisIsBalanced(arrayParenthesis);
  // retonar verdadero o false si es balanceado
  return isBalanced;
};

module.exports = isStringBalanced;
