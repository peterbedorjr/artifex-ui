import { shallowMount } from '@vue/test-utils';

import Select from '../index';

describe('Select', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Select);

    expect(wrapper.findComponent(Select).exists()).toBe(true);
  });
});
