import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-item.component.html',
  styleUrl: './add-new-item.component.css'
})
export class AddNewItemComponent {
  @Output() newItem = new EventEmitter<string>()
  nameControl = new FormControl('')

  handleAddNewItem(event: Event) {
    event.preventDefault()
    
    if (this.nameControl.value) {
      this.newItem.emit(this.nameControl.value);
      this.nameControl.reset()
    }
  }
}
