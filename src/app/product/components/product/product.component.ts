import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy{
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  
  today = new Date();

  constructor(){
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log("ngOnChanges");
  //   console.log(changes);
  // }

  ngOnInit(): void{
    console.log('ngOnInit');
  }

  ngDoCheck(): void{
    console.log('DoCheck');
  }

  ngOnDestroy(): void{
    console.log('onDestroy');
  }

  addCart(): void{
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
