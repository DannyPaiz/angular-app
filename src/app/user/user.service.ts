import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UserService {

    private users: User[] = DUMMY_USERS;

    private tempId = 7;

    constructor() {
        // 
        let users = localStorage.getItem('users');
        if(users) {
            this.users = JSON.parse(users);
        }
    }

    // GET ALL USERS
    // We want to use this to return the users,
    // but we might need to update the actual file..
    // deployed would have that local data available
    // so re-rendering the new data is a must within @for user of users
    getUsers() {
        return localStorage.getItem('users');
    }

    // generate and increase local user id to 'track'
    getNewUserId() {
        const temp = 'u' + this.tempId;
        this.tempId += 1;
        return temp;
    }

    // ADD ONE USER
    addUser(userData: User) {
        this.users.unshift({
            id: userData.id,
            name: userData.name,
            avatar: userData.avatar
        })
        this.saveUsers();
    }

    private saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

}