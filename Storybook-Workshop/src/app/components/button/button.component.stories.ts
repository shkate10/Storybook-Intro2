import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
      declarations: [
        ButtonComponent
      ]
    })
  ]} as Meta;

export const button = () => ({
  component: ButtonComponent,
  props: {
    label: 'Button with configured icon',
    onClick: () => alert('Button clicked!')
  }
});

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => {
    window.alert('Primary Clicked');
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
  onClick: () => {
    window.alert('Secondary Clicked');
  }
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true
};
