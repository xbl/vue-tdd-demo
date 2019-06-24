import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Service from '@/login/service';

describe('Login service', () => {
  it('Given 用户数据为 xbl,123, When 执行 Service.login() 时，Then 参数为 xbl,123 的用户', async () => {
    const mock = new MockAdapter(axios);
    const expectedResult = { username: 'xbl', password: '123' };
    mock.onPost('/users/token').reply(200);

    await Service.login(expectedResult);
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].data).toBe(JSON.stringify(expectedResult));
  });
});
