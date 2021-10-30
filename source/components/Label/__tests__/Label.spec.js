import { shallowMount } from '@vue/test-utils';

import Label from '../index';

import validationColors from '../../../constants/validation-colors';

describe('Label', () => {
  it('renders an label element with default slot', () => {
    const wrapper = shallowMount(Label, {
      slots: {
        default: 'Label',
      },
    });

    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('label').text()).toBe('Label');
  });

  test.each(validationColors)('it has %s color variant', (variant) => {
    const wrapper = shallowMount(Label, {
      props: {
        variant,
      },
    });

    expect(wrapper.classes()).toContain(`-${variant}`);
  });

  it('has required indicator', () => {
    const wrapper = shallowMount(Label, {
      props: {
        required: true,
      },
      slots: {
        default: 'asdf',
      },
    });

    expect(wrapper.text()).toContain('*');
    expect(wrapper.classes()).toContain('-required');
  });
});
