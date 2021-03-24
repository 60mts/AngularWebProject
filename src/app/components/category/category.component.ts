import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category1 = {
    categoryName: 'Bilgisayar Parçaları',
    categoryId: 1
  }
  category2 = {
    categoryName: 'Kücük Bilgisayar Parçası',
    categoryId: 2
  }
  category3 = {
    categoryName: 'Bilgisayar Parçaları',
    categoryId: 3}

    category4 = {
      categoryName: 'Bilgisayar Parçaları',
      categoryId: 4}
      category5 = {
        categoryName: 'Bilgisayar Parçaları',
        categoryId:5}
        category6 = {
          categoryName: 'Bilgisayar Parçaları',
          categoryId: 6}

  categories = [
    this.category1,
    this.category2,
    this.category3,
    this.category4,
    this.category5,
    this.category6
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
