import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_yWdiNGSd5',
    ClientId: '320ns48kc7lqlm8ucfjrun2oq4',
};

export default new CognitoUserPool(poolData);
