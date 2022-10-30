import { ASTWithName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  names: string[] = ['Angela', 'Valeria', 'Ricardo'];
  newName: string = '';

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  agePlus(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
