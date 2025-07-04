'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '¡Hola desde Lambda probando commit probando PR!',
        input: event,
      },
      null,
      2
    ),
  };
};
