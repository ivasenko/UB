import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../services/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'view-detail-app',
    templateUrl: './view-detail.component.html',
	styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
	user: User = new User();
	constructor(private route: ActivatedRoute,
	            private router: Router,
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
	updateuser(id:number): void {
		this.router.navigate(['/update-user', id]);
	}
}
