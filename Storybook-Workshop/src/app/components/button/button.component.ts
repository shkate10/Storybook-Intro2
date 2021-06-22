import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type = 'primary';
  @Input() primary = false;
  @Input() label = [];
  @Input() disabled = false;
  @Input() backgroundColor?: string;
  // tslint:disable-next-line:no-output-native
  @Output() click = new EventEmitter<void>();

  get classes(): string {
    return this.primary ? 'p-button-primary' : 'p-button-secondary';
  }

  onClick(): void {
    this.click.emit();
  }

}
