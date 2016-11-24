const isEnv = env => (process.env.NODE_ENV === env);
const isDebug = () => process.env.DEBUG === 'true';
module.exports = {
  isTest() { return isEnv('test'); },
  isDev() { return isEnv('development'); },
  isProd() { return isEnv('production'); },
  isDebug,
};
