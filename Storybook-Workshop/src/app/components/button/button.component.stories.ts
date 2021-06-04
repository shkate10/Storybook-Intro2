import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
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
    }),
    componentWrapperDecorator((story) => `<div class="storybook-component-wrapper">${story}</div>`)
  ],

  // Uncomment to set the backrgound paramenter on a component level

  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //     ],
  //   },
  // },
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as Meta;

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
  primary: true,
  onClick: () => {
    window.alert('Primary Clicked');
  }
};
// This background parameters will override the global background parameters
Primary.parameters = {
  backgrounds: {
    values: [
      {name: 'blue', value: '#00f'},
      {name: 'green', value: '#0f0'},
    ],
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  primary: false,
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
