import { mount } from '@vue/test-utils';
import ButtonGroup from '../index';
import Button from '../../Button';

describe('ButtonGroup', () => {
  it('renders the default slot content', () => {
    const Template = {
      components: { Button, ButtonGroup },
      template: `<ButtonGroup><Button>hey</Button></ButtonGroup>`,
    };

    const wrapper = mount(Template);

    expect(wrapper.findComponent(Button).exists()).toBe(true);
    expect(wrapper.findComponent(Button).classes()).toContain('-rounded-normal');
  });

  it('rounds the corners of left and right child buttons', () => {
    const Template = {
      components: { Button, ButtonGroup },
      template: `
        <ButtonGroup>
          <Button>one</Button>
          <Button>two</Button>
        </ButtonGroup>
      `,
    };

    const wrapper = mount(Template);

    expect(wrapper.findAllComponents(Button)).toHaveLength(2);
    expect(wrapper.findAllComponents(Button).at(0).classes()).toContain('-rounded-left-normal');
    expect(wrapper.findAllComponents(Button).at(1).classes()).toContain('-rounded-right-normal');
  });

  it('does not round the corners of middle child button', () => {
    const Template = {
      components: { Button, ButtonGroup },
      template: `
        <ButtonGroup>
          <Button>one</Button>
          <Button>two</Button>
          <Button>three</Button>
        </ButtonGroup>
      `,
    };

    const wrapper = mount(Template);
    const buttons = wrapper.findAllComponents(Button);

    expect(buttons).toHaveLength(3);
    expect(buttons.at(0).classes()).toContain('-rounded-left-normal');
    expect(buttons.at(1).classes()).toContain('-rounded-none');
    expect(buttons.at(2).classes()).toContain('-rounded-right-normal');
  });
});
