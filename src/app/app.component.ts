import { Component } from '@angular/core';
import { IWord } from './IWord';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juego del Ahorcado';
  acciones = 'Acciones';
  estadisticas ='Estadisticas';
  aciertos='Aciertos:';
  desaciertos='Desaciertos:';
  totalJugadas='Total de Jugadas:';
  sms='Mensaje';
  student='Estudiante: ';
  nameclass='- Desarrollo Frontend con Angular';
  Words: IWord[];



  //cosas x cambiar
  numaciertos= '';
  numdesaciertos= '';
  numtotaljugadas= '';
  guiones='guiones qlos chupen el perro';
  nomestudiante='Matias Chavez Saavedra';


}