import { MultiselectComponent } from './multiselect.component';
import { moduleMetadata, Story } from '@storybook/angular';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Multiselect',
  component: MultiselectComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MultiSelectModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [
        MultiselectComponent,
      ]
    })
  ]
};

export const multiselectDefault = () => ({
  component: MultiselectComponent,
  props: {
    selectedItems: [{name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'}],
    items: [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ]
  }
});


const Template: Story<MultiselectComponent> = (args) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  selectedItems: [{name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'}],
  items: [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ]
};
