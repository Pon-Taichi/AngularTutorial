import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //heroesはHero型（idとnameを持つ）の配列で空
  heroes: Hero[] = []; 

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // hero.service.tsで定義したgetHeroes()
    this.heroService.getHeroes().subscribe(heroes => {
      console.log(JSON.stringify(heroes));
      this.heroes = heroes.slice(0, 5);
    });
  }

}
