import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  
})

export class ToDoListComponent implements OnInit {


  viewchild: any;

  miFormulario: FormGroup= this.fb.group({
    fecha:[new Date()],
    observations:[''],
    done:[false]
  })
  constructor(private fb:FormBuilder) {
   
  }
  entity:Todo={
    fecha:new Date(),
    observations :'xxx',
    done:false
  }

 
  itemsParaFlex:Todo[]= [];
  // private _itemsParaFlex:Todo[]=[];
  // public get itemsParaFlex(){
  //   return this._itemsParaFlex;
  // };
  // public set itemsParaFlex(list: Todo[]){
  //   this._itemsParaFlex = list;
  // }

  ngOnInit(): void {
    //this.itemsParaFlex=[];
  }
  addToArray(){
   
    this.itemsParaFlex?.push(this.miFormulario.value)
    this.miFormulario.reset();

  }

}
