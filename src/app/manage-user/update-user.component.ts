import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'update-user-app',
    templateUrl: './update-user.component.html',
	styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
	user: User = new User();
	constructor(private route: ActivatedRoute,
	            private userService: UserService,
				private location: Location) { }
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.userService.getUser(+params['id']))
        .subscribe(user => this.user = user);
    }
    goBack(): void {
        this.location.back();
    }
}
