import { shallowMount } from '@vue/test-utils';

import InputErrors from '../index';

describe('InputErrors', () => {
  it('renders the elements', () => {
    const wrapper = shallowMount(InputErrors, {
      props: {
        errors: ['one', 'two', 'three'],
      },
    });

    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('ul').findAll('li')).toHaveLength(3);
    expect(wrapper.find('ul').findAll('li').at(0).text()).toEqual('one');
    expect(wrapper.find('ul').findAll('li').at(1).text()).toEqual('two');
    expect(wrapper.find('ul').findAll('li').at(2).text()).toEqual('three');
  });
});
