import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from '../user.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObj: userObj;
  constructor(private route: ActivatedRoute, private router: Router ) { 
    this.userObj = new userObj();
  }

  ngOnInit(): void {
  }
  getUserID(){
    const userId = localStorage.getItem('userList');
    if(userId !== null){
      const userList = JSON.parse(userId);
      return userList.length + 1;
    } else {
      return 1
    }
  }

  saveUser(){
    const id = this.getUserID();
    this.userObj.userID = id;
    const userId = localStorage.getItem('userList');
    if(userId !== null){
      const userList = JSON.parse(userId);
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
    } else{
      const userArr = [];
      userArr.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userArr));
    }
    this.router.navigateByUrl('user-list');
  }

}
