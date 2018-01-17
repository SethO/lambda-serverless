const RequestUtils = require('./requestUtils');

class alphaSdk {
  
  constructor({
    awsAccessKeyId = process.env.ALPHA_API_AWS_ACCESS_KEY_ID,
    awsSecretAccessKey = process.env.ALPHA_API_AWS_SECRET_ACCESS_KEY
  }) {
    this.awsAccessKeyId = awsAccessKeyId;
    this.awsSecretAccessKey = awsSecretAccessKey;
    this.requestUtils = new RequestUtils();
  }

  hello() {
    const awsCredentials = {
      accessKeyId: this.awsAccessKeyId,
      secretAccessKey: this.awsSecretAccessKey
    };
    const requestParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      uri: 'https://sethorell.com/alpha/hello'
    };

    return this.requestUtils.makeRequestAsync({awsCredentials, requestParams});
  }
}

module.exports = alphaSdk;