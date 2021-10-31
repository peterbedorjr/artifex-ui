import { mount } from '@vue/test-utils';
import FormGroup from '../index';

describe('FormGroup', () => {
  it('renders the label', () => {
    const wrapper = mount(FormGroup, {
      props: {
        label: 'Label',
      },
    });

    expect(wrapper.find('label').exists()).toBe(true);
    expect(wrapper.find('label').text()).toBe('Label');
  });

  it('renders the description', () => {
    const wrapper = mount(FormGroup, {
      props: {
        description: 'Captain Jean-Luc Picard',
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('Captain Jean-Luc Picard');
  });

  it('renders the errors', () => {
    const wrapper = mount(FormGroup, {
      props: {
        errors: ['Picard', 'LaForge', 'Crusher'],
      },
    });

    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.findAll('li')).toHaveLength(3);
    expect(wrapper.findAll('li').at(0).text()).toEqual('Picard');
    expect(wrapper.findAll('li').at(1).text()).toEqual('LaForge');
    expect(wrapper.findAll('li').at(2).text()).toEqual('Crusher');
  });

  it('renders the slot content stacked', () => {
    const wrapper = mount(FormGroup, {
      slots: {
        default: `
          <input />
          <input />
        `
      },
    });

    expect(wrapper.findAll('input')).toHaveLength(2);
  });

  it('renders the slot content inline', () => {
    const wrapper = mount(FormGroup, {
      props: {
        inline: true,
      },
      slots: {
        default: `
          <input />
          <input />
        `
      },
    });

    expect(wrapper.findAll('input')).toHaveLength(2);
    expect(wrapper.find('.form-group__inputs').classes()).toContain('-inline');
  });
});
