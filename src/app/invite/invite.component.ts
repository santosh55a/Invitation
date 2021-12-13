import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, InviteService } from '../service/invite.service';
//import nodemailer from 'nodemailer';


const users: User[] = [
  { email: 'user0@santosh.com' },
  { email: 'user1@santosh.com' },
  { email: 'user2@santosh.com' },
  { email: 'user3@santosh.com' },
  { email: 'user4@santosh.com' },
  { email: 'user5@santosh.com' },
  { email: 'user6@santosh.com' },
  { email: 'user7@santosh.com' },
  { email: 'user8@santosh.com' },
  { email: 'user9@santosh.com' },
  { email: 'user10@santosh.com' }
];
const processedUsers: any[] = [];

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  constructor(private router: Router, private inviteService: InviteService) {

  }

  ngOnInit(): void {
    //console.log(users);
    // let testAccount = await nodemailer.createTestAccount();
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass, // generated ethereal password
    //   },
    // });
  }

  async onSubmit(): Promise<void> {
    alert('Invite users');
    for (const user of users) {
      try {
        let checkExisting = processedUsers.findIndex((email) => email === user);
        if (checkExisting >= 0)
          continue;
        user.uniqueUser = true;
        await this.inviteService.invite(user);
        // const contents = await transporter.sendMail({
        //   from: testAccount.user,
        //   to: user.email, // list of receivers
        //   subject: "Invite", // Subject line
        //   text: "Hello Friend", // plain text body
        //   html: "<b>Hello Friend</b>", // html body
        // });
        processedUsers.push(user.email);
      } catch (e) {
        console.log(e)
      }
    }
    console.log("------------------ Navigate to List comp --------")
    this.router.navigate(['/list']);
  }
}
