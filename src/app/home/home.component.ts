import { Component, OnInit } from '@angular/core';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    users: User[];
	constructor(private userService: UserService) { }
    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit(): void {
        this.getUsers();
    }
}
