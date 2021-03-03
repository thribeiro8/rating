import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  expandido: boolean = true;
  @Input() title: string;

  expandir() {
    this.expandido = true;
  }

  contrair() {
    this.expandido = false;
  }
}
