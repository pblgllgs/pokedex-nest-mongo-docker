export const EnvConfigutarion = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGO_URL_LOCAL,
  port: process.env.PORT || 3002,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
});
