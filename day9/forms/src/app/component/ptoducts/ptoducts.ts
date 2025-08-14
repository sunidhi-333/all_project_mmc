import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ptoducts',
  imports: [NgFor,FormsModule],
  templateUrl: './ptoducts.html',
  styleUrl: './ptoducts.css'
})
export class Ptoducts {
productsList = ['Product 1', 'Product 2', 'Product 3'];
product='';
addProduct(product: string) {
this.productsList.push(product);
}
deleteProduct(index: number) {
this.productsList.splice(index, 1);
}
updateProduct(index: number, newProduct: string) {
this.productsList[index] = newProduct;
}
}
