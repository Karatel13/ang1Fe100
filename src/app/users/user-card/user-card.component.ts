import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IUser } from '../../Models/user';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() userList!: IUser;
  

  constructor(private router: Router) {}
  

  goToDetails() {
    this.router.navigate(['/details', this.userList.id]);
  }
}