import { shallowMount, mount } from '@vue/test-utils';

import Alert from '../index';
import Icon from '../../Icon';

import validationColors from '../../../constants/validation-colors';

describe('Alert', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Alert);

    expect(wrapper.findComponent(Alert).exists()).toBe(true);
  });

  it('renders the default slot content', () => {
    const wrapper = shallowMount(Alert, {
      slots: {
        default: 'This is a test',
      },
    });

    expect(wrapper.findComponent(Alert).text()).toEqual('This is a test');
  });

  it('renders the icon', async () => {
    const wrapper = mount(Alert, {
      props: {
        showIcon: false,
      },
      slots: {
        default: 'This is a test',
      },
    });

    expect(wrapper.findComponent(Alert).findComponent(Icon).exists()).toBe(false);

    await wrapper.setProps({ showIcon: true });

    expect(wrapper.findComponent(Alert).findComponent(Icon).exists()).toBe(true);
  });

  it('renders the close button', async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    expect(wrapper.findComponent(Alert).find('button').exists()).toBe(true);
  });

  it('emits closed when close button is clicked', async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    wrapper.findComponent(Alert).find('button').trigger('click');

    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test.each(validationColors)('it has the %s color variant', (variant) => {
    const wrapper = mount(Alert, {
      props: {
        variant,
      },
    });

    expect(wrapper.classes()).toContain(`-${variant}`);
  });
});
