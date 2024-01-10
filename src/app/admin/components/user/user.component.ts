import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users:User[]=[]
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getList();
  }
  
  getList(){
    this.userService.getAll().subscribe(result=>{
      console.log(result.data)
      this.users=result.data;
    });
  }
}