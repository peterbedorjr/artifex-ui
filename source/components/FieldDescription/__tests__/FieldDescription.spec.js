import { shallowMount } from '@vue/test-utils';

import FieldDescription from '../index';

describe('FieldDescription', () => {
  it('renders the element', () => {
    const wrapper = shallowMount(FieldDescription);

    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('renders the slot content', () => {
    const text = 'This is a description';
    const wrapper = shallowMount(FieldDescription, {
      slots: {
        default: text,
      },
    });

    expect(wrapper.text()).toContain(text);
  });

  it('is not tabbable', () => {
    const wrapper = shallowMount(FieldDescription);

    expect(wrapper.attributes()).toMatchObject({ tabindex: '-1' })
  });
});
