import { shallowMount } from '@vue/test-utils';
import Button from '../index';
import Icon from '../../Icon';
import Spinner from '../../Spinner';
import buttonSizes from '../../../constants/button-sizes';
import borderRadii from '../../../constants/border-radii';
import colors from '../../../constants/colors';

const buttonColors = colors.filter((color) => ! ['white', 'black'].includes(color));

describe('Button', () => {
  it('renders the default slot', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button Text',
      },
    });

    expect(wrapper.html()).toContain('Button Text');
  });

  test.each(buttonSizes)('it has %s size variant', (size) => {
    const wrapper = shallowMount(Button, {
      props: {
        size,
      },
    });

    expect(wrapper.classes()).toContain(`-${size}`);
  });

  test.each(borderRadii)('it has %s border radius variant', (borderRadius) => {
    const wrapper = shallowMount(Button, {
      props: {
        borderRadius,
      },
    });

    expect(wrapper.classes()).toContain(`-rounded-${borderRadius}`);
  });

  test.each(buttonColors)('it has %s color variant', (variant) => {
    const wrapper = shallowMount(Button, {
      props: {
        variant,
      },
    });

    expect(wrapper.classes()).toContain(`-${variant}`);
  });

  it('adds block class when block prop is true', () => {
    const wrapper = shallowMount(Button, {
      props: {
        block: true,
      },
    });

    expect(wrapper.classes()).toContain('-block');
  });

  it('renders an icon', () => {
    const wrapper = shallowMount(Button, {
      props: {
        icon: 'award',
      },
    });

    expect(wrapper.findComponent(Icon).exists()).toBe(true);

    expect(wrapper.findComponent(Icon).props()).toEqual({
      icon: 'award',
      color: 'white',
      strokeWidth: 1,
      size: 'normal',
      width: 24,
      height: 24
    });
  });

  it('shows the loading icon', () => {
    const wrapper = shallowMount(Button, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.findComponent(Spinner).exists()).toBe(true);
    expect(wrapper.classes()).toContain('-shifted');
  });
});
