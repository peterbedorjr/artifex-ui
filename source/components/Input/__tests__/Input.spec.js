import { shallowMount } from '@vue/test-utils';
import Input from '../index';

describe('Input', () => {
  it('renders an input element', () => {
    const wrapper = shallowMount(Input);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('can be initialized with a value', async () => {
    const wrapper = shallowMount(Input, {
      props: {
        modelValue: 'test',
      },
    });

    expect(wrapper.find('input').element.value).toBe('test');
  });

  it('can set the value and emits modelValue', async () => {
    const wrapper = shallowMount(Input);

    const textInput = wrapper.find('input')
    await textInput.setValue('test value');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.find('input').element.value).toBe('test value');
  });
});
