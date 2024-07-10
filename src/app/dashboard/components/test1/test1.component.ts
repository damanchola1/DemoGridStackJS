import { Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { GridstackItemComponent } from 'gridstack/dist/angular';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { PrimengModule } from 'src/app/primeng/primeng.module';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [PrimengModule, NgxSpinnerModule],
  templateUrl: './test1.component.html',
  styles: [
    `
    :host {
      display: block !important;
    }
    `
  ],
  styleUrl: './test1.component.css'
})
export class Test1Component {

  constructor(private spinnerService: NgxSpinnerService,
    private gridStack: GridstackItemComponent, private element: ElementRef, private render: Renderer2) {
    console.log(gridStack);
  }


  products: Product[] = [
    {
      "id": "1000",
      "code": "f230fh0g3",
      "name": "Bamboo Watch",
      "description": "Product Description",
      "image": "bamboo-watch.jpg",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1001",
      "code": "nvklal433",
      "name": "Black Watch",
      "description": "Product Description",
      "image": "black-watch.jpg",
      "price": 72,
      "category": "Accessories",
      "quantity": 61,
      "inventoryStatus": "OUTOFSTOCK",
      "rating": 4
    },
    {
      "id": "1002",
      "code": "zz21cz3c1",
      "name": "Blue Band",
      "description": "Product Description",
      "image": "blue-band.jpg",
      "price": 79,
      "category": "Fitness",
      "quantity": 2,
      "inventoryStatus": "LOWSTOCK",
      "rating": 3
    },
    {
      "id": "1003",
      "code": "244wgerg2",
      "name": "Blue T-Shirt",
      "description": "Product Description",
      "image": "blue-t-shirt.jpg",
      "price": 29,
      "category": "Clothing",
      "quantity": 25,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1004",
      "code": "h456wer53",
      "name": "Bracelet",
      "description": "Product Description",
      "image": "bracelet.jpg",
      "price": 15,
      "category": "Accessories",
      "quantity": 73,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    },
    {
      id: '1012',
      code: '250vm23cc',
      name: 'Green T-Shirt',
      description: 'Product Description',
      image: 'green-t-shirt.jpg',
      price: 49,
      category: 'Clothing',
      quantity: 74,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1013',
      code: 'fldsmn31b',
      name: 'Grey T-Shirt',
      description: 'Product Description',
      image: 'grey-t-shirt.jpg',
      price: 48,
      category: 'Clothing',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 3
    },
    {
      id: '1014',
      code: 'waas1x2as',
      name: 'Headphones',
      description: 'Product Description',
      image: 'headphones.jpg',
      price: 175,
      category: 'Electronics',
      quantity: 8,
      inventoryStatus: 'LOWSTOCK',
      rating: 5
    },
    {
      id: '1015',
      code: 'vb34btbg5',
      name: 'Light Green T-Shirt',
      description: 'Product Description',
      image: 'light-green-t-shirt.jpg',
      price: 49,
      category: 'Clothing',
      quantity: 34,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1016',
      code: 'k8l6j58jl',
      name: 'Lime Band',
      description: 'Product Description',
      image: 'lime-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 12,
      inventoryStatus: 'INSTOCK',
      rating: 3
    },
    {
      id: '1017',
      code: 'v435nn85n',
      name: 'Mini Speakers',
      description: 'Product Description',
      image: 'mini-speakers.jpg',
      price: 85,
      category: 'Clothing',
      quantity: 42,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1018',
      code: '09zx9c0zc',
      name: 'Painted Phone Case',
      description: 'Product Description',
      image: 'painted-phone-case.jpg',
      price: 56,
      category: 'Accessories',
      quantity: 41,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1019',
      code: 'mnb5mb2m5',
      name: 'Pink Band',
      description: 'Product Description',
      image: 'pink-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 63,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
  ]

  showSpinner() {
    let hola = this.element.nativeElement.parentElement
    this.render.setStyle(hola, 'overflow', 'hidden')
    this.spinnerService.show()
    this.hideSpinner()
  }

  hideSpinner() {
    setTimeout(() => {
      let hola = this.element.nativeElement.parentElement
      this.render.setStyle(hola, 'overflow', 'auto')
      this.spinnerService.hide()
    }, 3000);
  }

}