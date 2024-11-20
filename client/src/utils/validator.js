import { isValidUsername } from "6pp";

export const userNameValidation = (userName) => {
  if (!isValidUsername(userName))
    return {
      isValid: false,
      errorMessage: "username is not correct",
    };
};
