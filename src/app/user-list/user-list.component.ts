import { Component, OnInit } from '@angular/core';
import { userObj } from '../user.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: userObj[];
  constructor() { 
    this.userList = []; 
  }

  ngOnInit(): void {
    const lists = localStorage.getItem('userList');
    if(lists !== null){
      this.userList = JSON.parse(lists);
    }
  }

  delete(id: any){
    const lists = localStorage.getItem('userList');
    if(lists !== null){
      this.userList = JSON.parse(lists);
      this.userList.splice(this.userList.findIndex((a:any) => a.userId == id), 1)
      localStorage.setItem('userList', JSON.stringify(this.userList))
    }else{
      const lists = localStorage.getItem('userList');
      if(lists !== null){
      this.userList = JSON.parse(lists);
    }
    }
  }

}
