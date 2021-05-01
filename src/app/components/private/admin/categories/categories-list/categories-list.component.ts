import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css', './../../../../../../assets/css/sb-admin-2.css']
})
export class CategoriesListComponent implements OnInit {

  public categories: any[] = []

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

}