import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: any[] = []

  public products: any[] = []
  public productsToFilter: any[] = []

  constructor(private cs: CategoryService, private ps: ProductService) { }

  ngOnInit(): void {

    this.cs
      .getAllCategories()
      .subscribe(
        (result) => {
          this.categories = result
        }
      )

    this.ps.getAllProducts().subscribe(
      (res) => {
        this.products = res
        this.productsToFilter = res
      },
      (err) => {
        console.log(err)
      }
    )

  }

  getProductsByCategory(categoryId: any) {

    categoryId == "all" ? this.products = this.productsToFilter :
      this.products = this.productsToFilter.filter((p) => {
        return p.category_id == categoryId
      })

  }

}
