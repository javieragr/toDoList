import { Component, Input, OnInit, Output,ViewChild } from '@angular/core';

import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcGridFilter from '@grapecity/wijmo.grid.filter';

import { Todo } from '../../interfaces/todo';
@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  
})
export class FlexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _lista:Todo[]= [];
  @Input() get lista():Todo[]{
    return this._lista;
  }
  @ViewChild('flex') mainGrid = wjcGrid.FlexGrid;
  public set lista(lista:Todo[]){
    console.log('changed', lista);
    this._lista = lista;
   //this.mainGrid.collectionView!.refresh()
    
   
    

  }
 
  title = 'Wijmo Starter App';
  //data = this.getData();
  iniciaFlex(s:any,e:any){
    console.log(s,e);
    

  }
  
   grid:any;
  refresh(){
    
    //this.mainGrid.itemsSource=[];
    this.mainGrid
    console.log(this.lista);
  //  this.grid= wijmo.getElement(flex)
    
  }


}
