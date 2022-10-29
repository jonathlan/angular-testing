import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Diana San';
  age = 24;
  img = 'https://cdn.pixabay.com/photo/2015/12/23/06/36/vector-1105214_960_720.png';
  btnDisabled = true;

  person ={
    name: 'Daniel',
    age: 18,
    avatar : 'https://cdn.pixabay.com/photo/2015/12/23/06/36/vector-1105214_960_720.png'
  }

toggleButton(){
  this.btnDisabled = !this.btnDisabled;
}

agePlus(){
  this.person.age++;
}
}
