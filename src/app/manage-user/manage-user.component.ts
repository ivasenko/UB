import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'manage-user-app',
    templateUrl: './manage-user.component.html',
	styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
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
	updateUser(id:number): void {
		this.router.navigate(['/update-user', id]);
	}
	deleteUser(id:number): void {
		this.userService.deleteUser(id);
	}
}
