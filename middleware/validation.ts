import Joi from "@hapi/joi";

interface registerdata {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface logindata {
  email: string;
  password: string;
}

const registerValidation = (data: registerdata) => {
  const schema = {
    firstname: Joi.string()
      .min(6)
      .required(),
    lastname: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

const loginValidation = (data: logindata) => {
  const schema = {
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
