import { Component, OnInit } from '@angular/core';

import { Hero } from '../interfaces/Hero';

import { HeroService} from '../hero.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 heroes: Hero[] = [];

  //selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  
  ngOnInit() {
    this.getHeroes();
  }

  //onSelect(hero: Hero): void {
    //this.selectedHero = hero;
   // console.log(this.selectedHero)
  //}

 // getHeroes(): void {
 //   this.heroes = this.heroService.getHeroes();
 // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

}