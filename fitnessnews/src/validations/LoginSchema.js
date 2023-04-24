import Yup from "./validation";

export const LoginSchema = Yup.object().shape({
  name: Yup.string().required(),
  email:Yup.string().required(),
  about: Yup.string().required(),
  accept:Yup.boolean().oneOf([true]),
  gender:Yup.string().required(),
});
