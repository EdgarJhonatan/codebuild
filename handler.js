'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '¡Hola desde Lambda probando Dependabot!',
        input: event,
      },
      null,
      2
    ),
  };
};
