module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl: `
  
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  *                                                                                             * 
  *  Please ensure that you are following conventional commit format for your commit message.   *
  *  https://www.conventionalcommits.org                                                        *
  *                                                                                             * 
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  `,
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
  },
};
