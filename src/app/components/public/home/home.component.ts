import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cs: CategoryService) { }

  ngOnInit(): void {
    this.cs
      .getAllCategories()
      .subscribe(
        (result) => {
          this.categories = result
        }
      )
  }
  /*
    title = 'Tunisia';
    users = ['Sourour', 'Ayoub', 'Islem', 'Molk', 'Chaima', 'Saif']
    course = {
      name: 'angular',
      duration: '350 H',
      price: 10
    }
    products = [
      {
        name:'Lait',
        price: 1350
      },
      {
        name:'Yaourt',
        price: 500
      },
      {
        name:'Dattes',
        price: 12000
      }
    ]
  
    deleteProduct(index: number){
      this.products.splice(index, 1);
    }
  */

  public categories: any[] = []

  products = [
    {
      id: 4,
      idCategory: 2,
      image: "http://placehold.it/700x400",
      name: "Tablet Lenovo",
      price: "1600DT",
      description: "C'est une Tablet Lenovo, 15 pouce, facile à emporter"
    }
  ]
  getCategoryById(id: number) {
    console.log(id);
  }
}
