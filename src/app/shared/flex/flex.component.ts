import { Component, Input, OnInit } from '@angular/core';

import { CollectionView, EventArgs } from 'wijmo/wijmo';

import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() lista:Todo[]= [];
  
  title = 'Wijmo Starter App';
  //data = this.getData();
  getData() {
    // var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
    //     data = [];
    // for (var i = 0; i < countries.length; i++) {
    //   data.push({
    //     country: countries[i],
    //     sales: Math.random() * 10000,
    //     expenses: Math.random() * 5000,
    //     downloads: Math.round(Math.random() * 20000),
    //   });
    // }
    return new CollectionView(this.lista);
   
    
  }
  itemSourceChanged(e?: EventArgs){
  console.log(e);
  

  }


}
