const figlet = require("figlet");
const ERROR_MESSAGE = "Something went wrong in: ";
const callbackFiglet = (err, data) => {
  if (err) {
    console.log(`${ERROR_MESSAGE} callbackFiglet`);
    console.dir(err);
    return;
  }
  console.log(data);
};
export const mFiglet = message => figlet(message, callbackFiglet);
