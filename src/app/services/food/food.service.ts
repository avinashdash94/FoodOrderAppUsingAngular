import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //This function will return all the food Item as array of Foods
  getAll(): Foods[]{
    return [
     {
        id: 1,
        name: 'Burger',
        price: 9,
        cookTime: '30-50',
        favorite: true,
        origins: ['italy','france'],
        star: 1.0,
        imageUrl:  '/assets/food-1.jpg',
        tags: ['Hamburger', 'Pizza', "Lunch"]
      }	 ,
      {
        id: 2,
        name: 'Cheez Burger',
        price: 2,
        cookTime: '20-30',
        favorite: false,
        origins: ['indian'],
        star: 2.5,
        imageUrl:  '/assets/food-2.jpg',
        tags: ['Hamburger', 'Pizza', "Lunch"]
      }	,     
    {
      id: 3,
      name: 'French Fries',
      price: 3,
      cookTime: '15-25',
      favorite: true,
      origins: ['italy', 'belgium', 'france', 'indian'],
      star: 3.0,
      imageUrl:  '/assets/food-3.jpg',
      tags: ['Fry']
    }	,
   
    {
      id: 4,
      name: 'Meatball',
      price: 4,
      cookTime: '10-15',
      favorite: true,
      origins: ['italy'],
      star: 4.5,
      imageUrl:  '/assets/food-4.jpg',
      tags: ['FastFood', 'Pizza', "Lunch"]
    }	,
    {
      id: 5,
      name: 'Vegetable Pizza',
      price: 5,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      star: 4.0,
      imageUrl:  '/assets/food-5.jpg',
      tags: ['brunch']
    }	,
    {
      id: 6,
      name: 'Vegetable Pizza',
      price: 6,
      cookTime: '60-70',
      favorite: true,
      origins: ['italy'],
      star: 4.0,
      imageUrl:  '/assets/food-6.jpg',
      tags: ['FastFood', 'Pizza', "Lunch"]
    }	,
    {
      id: 7,
      name: 'Vegetable spicy Pizza',
      price: 7,
      cookTime: '30-40',
      favorite: false,
      origins: ['italy'],
      star: 4.0,
      imageUrl:  '/assets/food-7.jpg',
      tags: ['SlowFood', 'Pizza', "Lunch"]
    }	,
    {
      id: 8,
      name: 'Veg Supe',
      price: 10,
      cookTime: '70-90',
      favorite: false,
      origins: ['italy'],
      star: 4.0,
      imageUrl:  '/assets/food-8.jpg',
      tags: ['FastFood', "Soup"]
    }	
    ]
  }

  //This function will return the Food based on tag  type 
  getAllFoodByTag(tag: string): Foods[]{

    if(tag == "All")
     return this.getAll();
     else
     return this.getAll().filter(food => food.tags?.map(element => {return element.toLowerCase(); })?.includes(tag.toLowerCase()));
     // else condition can be wrtten as below
      // return tag =="All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

  }

  getAllTag(): Tag[]{
      return [
        {name: 'All', count: 14},
        {name: 'FastFood', count: 4},
        {name: 'Pizza', count: 2},
        {name: 'Lunch', count: 3},
        {name: 'SlowFood', count: 2},
        {name: 'Hamburger', count: 1},
        {name: 'Fry', count: 1},
        {name: 'Soup', count: 1},
      ]
  }

  getFoodById(id: number): Foods{
    return this.getAll().find(food=> food.id == id)!;
  }

}
