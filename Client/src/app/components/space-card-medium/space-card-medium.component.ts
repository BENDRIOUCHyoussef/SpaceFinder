import { Component, Input, EventEmitter, Output, output } from '@angular/core';
import { Space } from '../../pages/features/Space/models/space.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-space-card-medium',
  imports: [CommonModule, RouterModule],
  templateUrl: './space-card-medium.component.html',
  styleUrl: './space-card-medium.component.scss'
})
export class SpaceCardMediumComponent {
  @Input() space!: Space; 
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.space.id);
  }

  onEdit() {
    this.edit.emit(this.space.id);
  }

}
