import { shallowMount } from '@vue/test-utils';

import Checkbox from '../index';

describe('Checkbox', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Checkbox);

    expect(wrapper.findComponent(Checkbox).exists()).toBe(true);
  });

  it('renders the default slot content', () => {
    const wrapper = shallowMount(Checkbox, {
      slots: {
        default: 'Slot content',
      },
    });

    expect(wrapper.findComponent(Checkbox).text()).toEqual('Slot content');
  });

  // TODO: vmodel, color variants
});
