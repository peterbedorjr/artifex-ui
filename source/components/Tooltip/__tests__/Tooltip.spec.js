import { shallowMount, mount } from '@vue/test-utils';

import Tooltip from '../index';

describe('Tooltip', () => {
  it('renders the elements', () => {
    const wrapper = shallowMount(Tooltip);

    expect(wrapper.find('div').attributes()).toMatchObject({ tabindex: '0' });
    expect(wrapper.find('.tooltip').exists()).toBe(true);
  });

  it('hides the tooltip when not mouseover', () => {
    const wrapper = shallowMount(Tooltip);

    expect(wrapper.find('.tooltip').attributes()).toMatchObject({
      class: 'tooltip',
      style: 'display: none; position: absolute; left: 0px; top: 0px; margin: 0px;',
    });
  });

  it('shows the tooltip when mouseover', async () => {
    const wrapper = shallowMount(Tooltip);

    await wrapper.trigger('mouseover');

    expect(wrapper.find('.tooltip').attributes()).toMatchObject({
      class: 'tooltip',
      style: 'display: none; position: absolute; left: 0px; top: 0px; margin: 0px; bottom: 0px; transform: translate(0px, -8px);',
    });
  });

  test.each(['top', 'left', 'bottom', 'right'])('it places the tooltip in the %s spot', async (placement) => {
    const wrapper = shallowMount(Tooltip, {
      props: { placement },
    });

    await wrapper.trigger('mouseover');

    expect(wrapper.html()).toContain(`data-popper-placement="${placement}"`);
  });

  it('can render html in slot', async () => {
    const wrapper = mount(Tooltip, {
      slots: {
        tooltip: '<strong>this is html</strong>',
      },
    });

    await wrapper.trigger('mouseover');

    expect(wrapper.find('.tooltip').html()).toContain('<strong>this is html</strong>');
  });
});
