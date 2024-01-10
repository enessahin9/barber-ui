import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { UserForUpdateDto } from '../../../../dtos/user-for-update-dto';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})

export class UserUpdateComponent {
  userUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService){
    this.userUpdateForm=this.formBuilder.group({
      id:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:[''], // yetki yok
      imageUrl:['',], // yetki yok

    })
  }
  updateUser(){
    console.log("user update")
    if(!this.userUpdateForm.valid)return
    let updateUser:UserForUpdateDto= Object.assign(
      {
        id:null,
        firstName:null,
        lastName:null,
        imageUrl:null,
        email:null,
      },
      this.userUpdateForm.value
    ); //end form map

    //TODO daha sonra substan -> pipe formatına çevirilcek
    this.userService.updateUser(updateUser).subscribe((res=>{
      console.log("kullanici güncellendi",res);
      
    }))
  }
}