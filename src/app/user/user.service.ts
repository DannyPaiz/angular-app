import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UserService {

    private users: User[] = DUMMY_USERS;

    private tempId = 7;

    constructor() {
        // 
        const users = localStorage.getItem('users');
        if(users) {
            this.users = JSON.parse(users);
        }
    }

    // GET ALL USERS
    getUsers() {
        return this.users.map(
            (user) => user
        );
    }

    // generate and increase local user id to 'track'
    getNewUserId() {
        const temp = 'u' + this.tempId;
        this.tempId += 1;
        return temp;
    }

    // tested: can be used now with addUser()
    incrementUserId() {
        const testGet = this.getNewUserId();
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