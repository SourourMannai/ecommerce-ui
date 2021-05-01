import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','./../../../../../../assets/css/sb-admin-2.css']
})
export class ProductListComponent implements OnInit {
  public products: any[] = []
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe(
      (res) => {
        this.products = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
