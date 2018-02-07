import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'add-user-app',
    templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    users: User[];
	user: User = new User();
	constructor(private router: Router,
	            private userService: UserService) { }
    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit(): void {
        this.getUsers();
    }
    addUser(): void {
	    this.userService.addUser(this.user);
		this.router.navigate(['/manage-user']);
    }
}
