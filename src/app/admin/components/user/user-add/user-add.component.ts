import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { RouterOutlet } from '@angular/router';
import { UserForCreateDto } from '../../../../dtos/user-for-create-dto';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  userAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService){   
    this.userAddForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      imageUrl:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  addUser(){
    //TODO return düzenlenicek ve subs işlemi logtan  sonra düzenle
    if(!this.userAddForm.valid)return

    let newUser:UserForCreateDto = Object.assign( //formdan->user çekme işlemi burdan yapılıyor
      {
        firstName:null,
        lastName:null,
        imageUrl:null,
        email:null,
        password:null
      },
      this.userAddForm.value
    );
    //TODO Daha sonra subscriden -> pipe formatına çevirilcek
    this.userService.addUser(newUser).subscribe((res=>{
      console.log("kullanıcı eklendi",res)
    }))
  }


}