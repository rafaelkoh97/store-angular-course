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
import { Product } from './../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy{
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log("Constructor");
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log("ngOnChanges");
  //   console.log(changes);
  // }

  ngOnInit(){
    console.log("ngOnInit");
  }

  ngDoCheck(){
    console.log("do check");
  }

  ngOnDestroy(){
    console.log("on destroy");
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}