const nodeEnv = require('../node-env');

describe('nodeEnv', () => {
  beforeEach(() => {
    process.env.NODE_ENV = undefined;
    process.env.DEBUG = undefined;
  });
  it('should return false by default', () => {
    expect(nodeEnv.isTest()).toBe(false);
    expect(nodeEnv.isDebug()).toBe(false);
    expect(nodeEnv.isDev()).toBe(false);
    expect(nodeEnv.isProd()).toBe(false);
  });

  it('should check the test environment', () => {
    process.env.NODE_ENV = 'test';
    expect(nodeEnv.isTest()).toBe(true);
    expect(nodeEnv.isDebug()).toBe(false);
    expect(nodeEnv.isDev()).toBe(false);
    expect(nodeEnv.isProd()).toBe(false);
  });

  it('should check the development environment', () => {
    process.env.NODE_ENV = 'development';
    expect(nodeEnv.isTest()).toBe(false);
    expect(nodeEnv.isDebug()).toBe(false);
    expect(nodeEnv.isDev()).toBe(true);
    expect(nodeEnv.isProd()).toBe(false);
  });

  it('should check the production environment', () => {
    process.env.NODE_ENV = 'production';
    expect(nodeEnv.isTest()).toBe(false);
    expect(nodeEnv.isDebug()).toBe(false);
    expect(nodeEnv.isDev()).toBe(false);
    expect(nodeEnv.isProd()).toBe(true);
  });

  it('isDebug should return true if the debug property is the boolean true', () => {
    process.env.DEBUG = true;
    expect(nodeEnv.isTest()).toBe(false);
    expect(nodeEnv.isDebug()).toBe(true);
    expect(nodeEnv.isDev()).toBe(false);
    expect(nodeEnv.isProd()).toBe(false);
  });

  it('isDebug should return true if the debug property is the string true', () => {
    process.env.DEBUG = 'true';
    expect(nodeEnv.isTest()).toBe(false);
    expect(nodeEnv.isDebug()).toBe(true);
    expect(nodeEnv.isDev()).toBe(false);
    expect(nodeEnv.isProd()).toBe(false);
  });

});
