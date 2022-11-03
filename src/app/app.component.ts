import { ASTWithName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './product.model';

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

  products: Product[] = [
    {
      name: 'Motorbike',
      price: 3500,
      image: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg',
      category: 'Motorbikes'
    },
    {
      name: 'Doraemon',
      price: 500,
      image: 'https://cdn.pixabay.com/photo/2018/12/23/09/45/toy-3890797_960_720.jpg'
    },
    {
      name: 'Cuddly toy',
      price: 250,
      image: 'https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_960_720.jpg'
    },
    {
      name: 'Nutcracker',
      price: 100,
      image: 'https://cdn.pixabay.com/photo/2020/11/22/16/45/nutcracker-5767159_960_720.jpg'
    },
    {
      name: 'Rubber duck',
      price: 50,
      image: 'https://cdn.pixabay.com/photo/2018/05/19/22/37/rubber-duck-3414512_960_720.jpg'
    },
    {
      name: 'Lego Angel',
      price: 25,
      image: 'https://cdn.pixabay.com/photo/2013/06/01/18/01/angel-115544_960_720.jpg'
    }
  ]

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
