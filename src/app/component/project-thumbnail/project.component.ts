import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;
  @Output() eventClick = new EventEmitter();

  sendEventToParent() {
    this.eventClick.emit(this.project.name)
  }

  ngOnInit(): void {
  }
}
