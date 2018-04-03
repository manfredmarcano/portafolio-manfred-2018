import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  public author: any = { first_name: 'Manfred', last_name: 'Marcano' };

  constructor() { }

  ngOnInit() {
  }

}
