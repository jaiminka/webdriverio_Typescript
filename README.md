In order to download the dependancies user has to clone this repo.
Then npm install  to install the node modules

CMD command to run this test:-


npx wdio wdio.conf.ts

In wdio.conf.ts file, Once baseUrl: '' & tagExpression:'' & add the tags to feature file to use below commands

npx wdio wdio.conf.ts --baseUrl=https://google.com --cucumberopts.tagExpression """@smoke or not @Pending"""
npx wdio wdio.conf.ts --baseUrl=https://google.com --cucumberopts.tagExpression """@pre or not @Pending"""

npx wdio wdio.conf.ts --baseUrl=https://google.com --cucumberopts.tagExpression """not @Pending or @Pending and @Pre"""
