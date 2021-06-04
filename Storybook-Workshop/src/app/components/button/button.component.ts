import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type = 'primary';
  @Input() label = '';
  @Input() disabled = false;
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }

}
