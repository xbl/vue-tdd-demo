import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Service from '@/login/service';

describe('Login service', () => {
  it('Give 用户数据为 xbl,123, When 执行 Service.login() 时，则参数为 xbl,123 的用户', (done) => {
    const mock = new MockAdapter(axios);
    const expectedResult = { username: 'xbl', password: '123' };
    mock.onPost('/users/token').reply((config) => {
      const user = JSON.parse(config.data);

      expect(user).toEqual(user);
      done();

      return [200, {
        token: 'xxx-yyy.abc',
      }];
    });

    Service.login(expectedResult);
  });
});
