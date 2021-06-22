import {moduleMetadata, Meta, Story, componentWrapperDecorator} from '@storybook/angular';
import {ButtonModule} from 'primeng/button';
import {ButtonComponent} from './button.component';
import {ParentWrapperComponent} from '../parent-wrapper/parent-wrapper.component';
import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  Props
} from '@storybook/addon-docs/blocks';
import {withDesign} from 'storybook-addon-designs';
import { linkTo } from '@storybook/addon-links';


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
    withDesign

    // Uncomment to set a component wrapper with 3em padding
    // componentWrapperDecorator((story) => `<div class="storybook-component-wrapper">${story}</div>`)
  ],

  // Uncomment to set the background parameter on a component level

  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //     ],
  //   },
  // },
  argTypes: {
    backgroundColor: {control: 'color'},
    label: {
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: 'Bold',
        Italic: 'Italic'
      }
    }
  },
  parameters: {
    pseudo: {
      // focus: true,
      // active: true
    }
  }
  // This is not working
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Subtitle />
  //         <Description />
  //         <Primary />
  //         <Stories />
  //       </>
  //     ),
  //   },
  // },
} as Meta;

export const button = () => ({
  component: ButtonComponent,
  props: {
    label: 'Button with configured icon',
    onClick: linkTo('Components/Button', 'Secondary')
  }
});

const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Italic',
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
  docs: {
    page: [
      ArgsTable
    ]
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/XQKH6D6NbnaPKPq9kEywIJ/USB-Design-System?node-id=122%3A113',
    allowFullscreen: true,
  },
  // a11y: {
  //   options: {
  //     rules: [
  //       {
  //         id: 'color-contrast',
  //         reviewOnFail: true
  //       }
  //     ],
  //   },
  // },
};

Primary.decorators = [
  moduleMetadata({
    declarations: [ParentWrapperComponent],
  }),
  componentWrapperDecorator(ParentWrapperComponent)
];

export const PrimaryBold = Template.bind({});
PrimaryBold.args = {
  ...Primary.args,
  label: 'Bold'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Italic',
  primary: false,
  onClick: () => {
    window.alert('Secondary Clicked');
  }
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...Secondary.args,
  disabled: true
};

SecondaryDisabled.parameters = {
  layout: 'centered',
};

export const PrimaryWithLink = Template.bind({});
PrimaryWithLink.args = {
  ...Primary.args,
  onClick: linkTo('Components/Button', 'primary')
};
