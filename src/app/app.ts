import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPipesComponent } from './demo-pipes/demo-pipes';
@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, DemoPipesComponent],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
title = 'angular-project-demo';
}