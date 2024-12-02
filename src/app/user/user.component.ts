import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string; //this instruction must be set
  @Output() select = new EventEmitter<string>();
  onSelectUser() {
    this.select.emit(this.id);
  }

}
