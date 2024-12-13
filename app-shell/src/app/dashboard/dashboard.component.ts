import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nav class="horizontal-menu">
        <ul>
            <li><a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a></li>
            <li class="submenu">
                <a href="#">Projects</a>
                <ul class="submenu-items">
                    <li><a routerLink="/dashboard">Project 1</a></li>
                    <li><a routerLink="/dashboard">Project 2</a></li>
                </ul>
            </li>
            <li class="submenu">
                <a href="#">Products</a>
                <ul class="submenu-items">
                    <li><a routerLink="/scm">SCM</a></li>
                    <li><a routerLink="/dcm">DCM</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div class="box">
        <div class="box-header">Products</div>
        <div class="box-content">
            <p>This is the content inside the box. You can add text, images, or other elements here.</p>
        </div>
        <ul>
            <li><a routerLink="/scm">SCM => </a></li>
            <li><a routerLink="/dcm">DCM => </a></li>
            <li><a routerLink="/xbs">XBS => </a></li>
        </ul>
    </div>`,
  styles: [`
        .horizontal-menu {
        display: flex;
        list-style: none;
        background-color: #333;
        padding: 10px 20px;
        }

        .horizontal-menu > ul {
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
        list-style: none;
        }

        .horizontal-menu li {
        position: relative;
        }

        .horizontal-menu a {
        color: white;
        text-decoration: none;
        padding: 8px 15px;
        display: block;
        }
        .horizontal-menu a.active {
            border-bottom: 2px solid #d69b01;
        }

        .horizontal-menu .submenu-items {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #444;
        display: none;
        list-style: none;
        padding: 10px;
        margin: 0;
        z-index: 100;
        }

        .horizontal-menu .submenu:hover .submenu-items {
        display: block;
        }

        .horizontal-menu .submenu-items li {
        padding: 5px 10px;
        }

        .horizontal-menu .submenu-items li a {
        color: #ddd;
        }

        .horizontal-menu .submenu-items li a:hover {
        color: white;
        background-color: #555;
        }
        .box {
  width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
}

.box-header {
  background-color: #007BFF;
  color: #fff;
  padding: 15px;
  text-align: left;
}

.box-header h1 {
  margin: 0;
  font-size: 18px;
}`]
})
export class DashboardComponent {}
