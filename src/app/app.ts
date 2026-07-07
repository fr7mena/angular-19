import { Component, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hydrate } from './hydrate/hydrate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hydrate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'angular-19';
  options = signal(['manzana', 'banana', 'frutilla']);
  choice = linkedSignal(() => this.options()[0]);

  constructor() {
    this.choice.set('fresa'); //En este mismo instante la variable tiene
    console.log(this.choice()); //Fresa
    this.options.set(['kiwi', 'piña']);
    console.log(this.choice()); //Como choice esta linkeada a options ahora este console log mostrara kiwi que es el valor al que esta linkeado la variable signals choice que básiscamente siempre es el primer componente de array options
  }
}
