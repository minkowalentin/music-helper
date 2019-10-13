import { TextValidatorTypes } from "../enums/validatorTypes";

export interface TextValidator {
  type?: TextValidatorTypes;
  minLength?: number;
  maxLength?: number;
  match?: string;
  email?: string;
}
