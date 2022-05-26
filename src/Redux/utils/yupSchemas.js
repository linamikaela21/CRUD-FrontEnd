import * as Yup from 'yup';

const regexNoSpecialCharactersOrNumbers = /^[A-Za-z ]+$/;

const minCharacter = 'Too Short! At least 2 characters';
const maxCharacter = 'Too Long! You exceeded the maximum, it is 60 characters.';
const requiredField = 'This field is required';
const specialCharacterNoNumbers = 'No special characters and numbers';

export const ProjectSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(2, minCharacter)
    .max(60, maxCharacter)
    .required(requiredField)
    .matches(regexNoSpecialCharactersOrNumbers, specialCharacterNoNumbers),
  description: Yup.string()
    .min(2, minCharacter)
    .max(60, maxCharacter)
    .required(requiredField)
    .matches(regexNoSpecialCharactersOrNumbers, specialCharacterNoNumbers),
  manager: Yup.mixed().oneOf(['Lali', 'Maxi', 'Agus']).defined(requiredField),
  assigned: Yup.mixed().oneOf(['July', 'Kyra', 'Facu']).defined(requiredField),
  status: Yup.mixed()
    .oneOf(['Done', 'inProcess', 'withoutStatus'])
    .defined(requiredField),
  date: Yup.date().required(requiredField),
});
