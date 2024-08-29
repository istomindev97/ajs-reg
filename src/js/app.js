export default class Validator {
  static validateUsername(username) {
    const validCharacters = /^[a-zA-Z0-9-_]+$/.test(username);
    const noMoreThanThreeDigits = !/\d{4,}/.test(username);
    const validStartEnd = /^[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z]$/.test(username);

    return validCharacters && noMoreThanThreeDigits && validStartEnd;
  }
}

const validator = new Validator();

// eslint-disable-next-line no-console
console.log(validator.validateUsername('123username'));
