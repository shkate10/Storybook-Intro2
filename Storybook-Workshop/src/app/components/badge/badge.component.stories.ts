import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BadgeModule} from 'primeng/badge';
import {BadgeComponent} from './badge.component';

export default {
  title: 'Components/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [BadgeModule]
    })
  ],
  argTypes: {
    value: {
      name: 'Value',
      control: {
        type: 'text'
      },
      table: {
        defaultValue: {
          summary: 'Bold'
        },
        type: {
          summary: 'Shows options to the Badge',
          detail: 'Listing of available options'
        },
      },
    },
    severity: {
      options: [
        'info',
        'success',
        'danger',
        'warning'
      ],
      control: {
        type: 'select'
      },
      table: {
        defaultValue: {
          summary: 'danger'
        },
        type: {
          summary: 'Shows options to the Badge',
          detail: 'Bold'
        },
      },
    }
  }
} as Meta;

const Template: Story<BadgeComponent> = (args) => ({
  props: args,
});

export const simpleInfoBadge = Template.bind({});
simpleInfoBadge.args = {
  value: '2',
  severity: 'info'
};
