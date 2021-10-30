import { mount } from '@vue/test-utils';
import TextField from '../index';

describe('TextField', () => {
  it('renders input and label elements when label prop is set', () => {
    const wrapper = mount(TextField, {
      props: {
        label: 'Label',
      }
    });

    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('label').text()).toBe('Label');
  });
});
