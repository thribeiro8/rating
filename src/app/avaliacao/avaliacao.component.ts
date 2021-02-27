import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css'],
})
export class AvaliacaoComponent {
  @Input() avaliacao: number;
}
