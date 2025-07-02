'use strict';

module.exports.hello = async (event) => {
  const AWS_SECRET_ACCESS_KEY = "AKIAEXAMPLECLAVE123";
  console.log("AWS_SECRET_ACCESS_KEY", AWS_SECRET_ACCESS_KEY);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '¡Hola desde Lambda probando commit!',
        input: event,
      },
      null,
      2
    ),
  };
};
