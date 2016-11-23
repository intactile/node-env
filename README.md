# node-env
Check the environment type: test, debug, development, production. 

## usage 
Use the process.env node object.

Set the environement type :
process.env.NODE_ENV = ['test' | 'development' | 'production']
process.env.DEBUG = ['true' | 'false']

And ckeck the enviroment type with one of :
isTest(), isDebug(), isDev(), isProd()
