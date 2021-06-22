import Joi from "joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export = registerValidation;