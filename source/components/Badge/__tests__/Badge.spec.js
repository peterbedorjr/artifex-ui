import { shallowMount } from '@vue/test-utils';

import Badge from '../index';

import colors from '../../../constants/colors';

describe('Badge', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Badge);

    expect(wrapper.findComponent(Badge).exists()).toBe(true);
  });

  it('renders the default slot content', () => {
    const wrapper = shallowMount(Badge, {
      slots: {
        default: 'This is a test',
      },
    });

    expect(wrapper.findComponent(Badge).text()).toEqual('This is a test');
  });

  it('has the pill variant', () => {
    const wrapper = shallowMount(Badge, {
      props: {
        pill: true,
      },
      slots: {
        default: 'This is a test',
      },
    });

    expect(wrapper.findComponent(Badge).classes()).toContain('-pill');
  });

  test.each(colors)('it has the %s color variant', (variant) => {
    const wrapper = shallowMount(Badge, {
      props: {
        variant,
      },
    });

    expect(wrapper.findComponent(Badge).classes()).toContain(`-${variant}`);
  });
});
