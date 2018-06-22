import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('test 1', 'test description 11', ''),
    new RecipeModel('test 2', 'test description 22', ''),

  ];
  constructor() { }

  ngOnInit() {
  }

}
