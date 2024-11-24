import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true, //if use a version lower than 19 you have to set it to true/ is the modern way to built angular 
    templateUrl: './header.component.html'
})
export class HeaderComponent{}