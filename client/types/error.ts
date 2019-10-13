import { TextValidatorTypes as validatorTypes } from "../enums/validatorTypes";
export type Error = {
  validator: validatorTypes;
  message: string;
};
