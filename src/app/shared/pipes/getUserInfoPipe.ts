import { PipeTransform, Pipe } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import {ReportListComponent } from '../../reports/report-list/report-list.component'

@Pipe({
    name: 'getUserInfo',
    pure: true
})
export class GetUserInfoPipe implements PipeTransform {
    userInfo = 'No funciono';
    constructor(public userS: UserService){

    }
    transform(value: number, args?: any): any {
        return this.getUserInfo(value);
    }
    
    getUserInfo(id: number): any {
        this.gertUserById(id);
        return this.gertUserById(id);
    }

    public gertUserById(id){
        this.userS.getUserById(id).subscribe(res =>{
         return `${res['data']['name']} ${res['data']['lastname']}`;
       });
    }
}