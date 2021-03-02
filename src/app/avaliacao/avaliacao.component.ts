import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css'],
})
export class AvaliacaoComponent {
  @Input() avaliacao: number;
  @Output() mudancaAvaliacao = new EventEmitter<number>();

  onClick(i: number) {
    this.mudancaAvaliacao.emit(i);
  }
}
