import sinon from 'sinon';
import { mount } from '@vue/test-utils';
import Login from '@/login/index.vue';

describe('Login Page', () => {
  it('When 用户访问登录页面，Then 看到用户名、密码输入框和提交按钮', () => {
    const wrapper = mount(Login);
    expect(wrapper.find('input.username').exists()).toBeTruthy();
    expect(wrapper.find('input.password').exists()).toBeTruthy();
    expect(wrapper.find('button.submit').exists()).toBeTruthy();
  });

  it('Given 用户访问登录页面，When 用户输入用户名为 xbl, 密码为 123，Then 页面中的 user 为 {username: "xbl", password: "123"}', () => {
    const wrapper = mount(Login);
    wrapper.find('input.username').setValue('xbl');
    wrapper.find('input.password').setValue('123');

    const expectedResult = { username: 'xbl', password: '123' };
    expect(wrapper.vm.user).toEqual(expectedResult);
  });

  it('Given 用户访问登录页面 And 用户输入用户名、密码，When 点击 submit，Then onSubmit 方法被调用', () => {
    const wrapper = mount(Login);
    const onSubmit = sinon.fake();
    wrapper.setMethods({ onSubmit });
    wrapper.find('input.username').setValue('xbl');
    wrapper.find('input.password').setValue('123');
    wrapper.find('button.submit').trigger('click');

    expect(onSubmit.called).toBeTruthy();
  });

  it('Given 用户访问登录页面，When 用户未输入登录信息，Then submit 按钮为 disabled And 点击 submit 不会调用 onSubmit', () => {
    const wrapper = mount(Login);
    const onSubmit = sinon.fake();
    wrapper.setMethods({ onSubmit });
    const submitBtn = wrapper.find('button.submit');
    submitBtn.trigger('click');

    expect(submitBtn.attributes('disabled')).toEqual('disabled');
    expect(onSubmit.called).toBeFalsy();
  });
});
