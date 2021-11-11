import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Dr Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bob" },
      { id: 14, name: "Chris Mass" },
      { id: 15, name: "Dunk" },
      { id: 16, name: "Espacito" },
      { id: 17, name: "Fled" },
      { id: 18, name: "Gerorgina" },
      { id: 19, name: "Harry Kane" },
      { id: 20, name: "Iden" }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
