import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData ={
    UserPoolId:"ap-south-1_DYsDFJktX",
    ClientId: "7rd1a2ta018t8jcccakq8b211e"
};

export default new CognitoUserPool(poolData);