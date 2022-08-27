import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGO_URL_WEB: Joi.required(),
  MONGO_URL_LOCAL: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
