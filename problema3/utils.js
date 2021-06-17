const isParenthesis = (character) => character === "(" || character === ")";

const arrayParenthesisIsBalanced = (arrayParenthesis) => {
  // Definición de la función recursiva
  // verifica si un array es balanceado
  // (puede no tener elementos)
  const isBalancedCore = (array) => {
    if (array.length === 0) {
      return true;
    }
    if (array.length % 2 === 0) {
      const first = array.shift();
      const last = array.pop();

      if (first === "(" && last === ")") {
        return isBalancedCore(array);
      }
    }
    return false;
  };

  // Se verifica que es un array y si tiene elementos
  // para comenzar con la evaluación de sus items recursivamente
  if (Array.isArray(arrayParenthesis) && arrayParenthesis.length > 0) {
    return isBalancedCore(arrayParenthesis);
  } else {
    return false;
  }
};

module.exports = {
  isParenthesis,
  arrayParenthesisIsBalanced,
};
