import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public newCard: any = { text: ''};

  @Input() nombre;

  constructor() { }

  ngOnInit() {
  }

}
