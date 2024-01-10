
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User } from "../models/user";
import { UserForUpdateDto } from "../dtos/user-for-update-dto";
import { UserForCreateDto } from "../dtos/user-for-create-dto";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<DataResponse<User[]>> {
        return this.httpClient.get<DataResponse<User[]>>("http://api.bysalon.com.tr/users/get-all")
    }
    //TODO return observable boolean dönüceksin
    addUser(newUser: UserForCreateDto): Observable<UserForCreateDto> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<UserForCreateDto>("http://api.bysalon.com.tr/users/create", newUser, { headers });
    }
    updateUser(updateUser: UserForUpdateDto): Observable<UserForUpdateDto> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<UserForUpdateDto>("http://api.bysalon.com.tr/users/update", updateUser, { headers });
    }
    deleteUser(user: User) {

    }
    userGetById(id: number) {

    }

}
