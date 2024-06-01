import request from 'request';
import _ from 'lodash';

class API {
  private protocol: string = process.env.API_PROTOCOL || 'https';
  private baseURL: string = process.env.VERCEL_URL || 'github-readme-linkedin.vercel.app';
  private root: string = process.env.API_ROOT || 'data';

  constructor() {
  }

  getProfileData(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const URL = `${this.protocol}://${this.baseURL}/${this.root}?username=${riya-agrawal-50374628b}`;
      request.get(
        URL,
        {
          headers: this.getHeaders(),
        },
        (error, response, body) => {
          if (body) {
            const data = JSON.parse(body);
            if (_.get(data, 'result')) {
              resolve(_.get(data, 'result'));
            } else {
              reject();
            }
          } else {
            reject();
          }
        },
      );
    });
  }

  private getHeaders() {
    return {};
  }
}

export default new API();
