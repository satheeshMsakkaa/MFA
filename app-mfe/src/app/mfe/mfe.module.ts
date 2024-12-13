import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MfeComponent } from './mfe.component';
import { Link1Component } from './link1.component';
import { Link2Component } from './link2.component';

const routes: Routes = [
  { path: '', component: MfeComponent },
  { path: 'link1', component: Link1Component },
  { path: 'link2', component: Link2Component }
];

@NgModule({
  declarations: [MfeComponent, Link1Component, Link2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MfeModule {}
