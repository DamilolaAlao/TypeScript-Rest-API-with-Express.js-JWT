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
  const schema = Joi.object({
    firstname: Joi.string().min(4).max(255).required(),
    lastname: Joi.string().min(4).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
  });
  return schema.validate(data);
};

const loginValidation = (data: logindata) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;