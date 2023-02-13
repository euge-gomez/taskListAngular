import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Nuestra lista de tareas';

  constructor() {}

  ngOnInit(): void {
    
  }
}
