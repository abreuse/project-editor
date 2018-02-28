import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;
  @Output() eventClick = new EventEmitter();

  sendEventToParent() {
    this.eventClick.emit(this.project.name)
  }

  ngOnInit(): void {
  }
}
