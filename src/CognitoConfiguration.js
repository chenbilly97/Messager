export const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
    UserPoolId : 'us-east-1_C67P1vNRf', // your user pool id here
    ClientId : '64t2dgnvt8eptboepbknp40rpp'// your app client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const userData = {
    Username : 'chenbilly97', // your username here
    Pool : userPool
};

const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
export function getCognitoUser()
{
    return cognitoUser;
}
export default function getUserPool()
{
    return userData
}
