import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  
})
export class ToDoListComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    Fecha:[new Date()],
    Observations:[''],
    Done:[false]
  })
  constructor(private fb:FormBuilder) { }
  entity:Todo={
    Fecha:new Date(),
    Observations :'xxx',
    Done:false
  }

 
  itemsParaFlex:Todo[]= [];
  ngOnInit(): void {
    //this.itemsParaFlex=[];
  }
  addToArray(){
   
    this.itemsParaFlex?.push(this.miFormulario.value)
    this.miFormulario.reset();

  }

}
