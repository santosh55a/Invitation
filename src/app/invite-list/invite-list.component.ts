import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InviteService, User } from '../service/invite.service';

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.css']
})
export class InviteListComponent implements OnInit {
  users$: Observable<User[]>;
  uniqueCount: number;

  constructor(private inviteService: InviteService) {
    this.users$ = this.inviteService.get();
  }

  getUniqueCount(users: User[]) {
    return users.filter((user) => user.uniqueUser).length;
  }

  ngOnInit(): void { }
}
