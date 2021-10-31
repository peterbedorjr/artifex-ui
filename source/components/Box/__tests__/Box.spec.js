import { shallowMount } from '@vue/test-utils';

import Box from '../index';

describe('Box', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Box);

    expect(wrapper.findComponent(Box).exists()).toBe(true);
  });

  // TODO:
  // - shadow variants
  // - border radius variants
});
