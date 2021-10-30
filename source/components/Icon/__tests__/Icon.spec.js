import { shallowMount } from '@vue/test-utils';

import Icon from '../index';

import sizes from '../../../constants/icon-sizes';
import colors from '../../../constants/colors';
import icons from '../../../constants/icons';

describe('Icon', () => {
  it('doesn\'t render empty SVG element if no icon is set', () => {
    const wrapper = shallowMount(Icon);

    expect(wrapper.find('svg').exists()).toBe(false);
  });

  // TODO
  // test.each(icons)('renders the %s icon', (icon) => {
  //   const wrapper = shallowMount(Icon, {
  //     props: {
  //       icon,
  //     },
  //   });

  //   expect(wrapper.find('svg').exists()).toBe(true);
  //   expect(wrapper.html().replace(/\n/g, '').replace(/\s/g, '')).toContain(require(`../../../icons/${icon}`).replace(/\n/g, '').replace(/\s/g, ''));
  // });

  it('can set stroke width', () => {
    const wrapper = shallowMount(Icon, {
      props: {
        strokeWidth: 10,
        icon: 'anchor',
      },
    });

    expect(wrapper.find('svg').html()).toContain('stroke-width="10"');
  });

  it('can set a size', () => {
    const size = sizes[0];

    const wrapper = shallowMount(Icon, {
      props: {
        size,
        icon: 'anchor',
      }
    });

    expect(wrapper.html()).toContain('width="14" height="14"');
  });

  it('can override height and width', () => {
    const wrapper = shallowMount(Icon, {
      props: {
        width: 100,
        height: 100,
        icon: 'anchor',
      }
    });

    expect(wrapper.html()).toContain('width="100" height="100"');
  });

  test.each(colors)('it has %s color variant', (color) => {
    const wrapper = shallowMount(Icon, {
      props: {
        color,
        icon: 'anchor',
      }
    });

    expect(wrapper.classes()).toContain(`-${color}`);
  });
});
