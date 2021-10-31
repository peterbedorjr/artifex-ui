import { shallowMount, mount } from '@vue/test-utils';

import Card from '../index';

describe('Card', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Card);

    expect(wrapper.findComponent(Card).exists()).toBe(true);
  });

  it('renders the default slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Carl Sagan',
      },
    });

    expect(wrapper.text()).toEqual('Carl Sagan');
  });

  it('renders the header slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        header: 'Carl Sagan',
      },
    });

    expect(wrapper.text()).toEqual('Carl Sagan');
  });

  it('renders the footer slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: 'Carl Sagan',
      },
    });

    expect(wrapper.text()).toEqual('Carl Sagan');
  });

  it('renders the header with props', () => {
    const wrapper = mount(Card, {
      props: {
        header: 'Carl',
        subheader: 'Sagan',
      },
    });

    expect(wrapper.find('h5').text()).toEqual('Carl');
    expect(wrapper.find('h6').text()).toEqual('Sagan');
  });
});
