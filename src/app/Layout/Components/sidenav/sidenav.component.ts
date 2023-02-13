import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { map, Observable, take } from 'rxjs';
import { UserService } from 'src/app/Users/Services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public administrador: boolean = true;
  
  constructor(private userSrv: UserService) {
  
  } 
    
      
    
  
  ngOnInit(): void {
    if (this.userSrv.getUserRol()){
      const userRol = this.userSrv.getUserRol()
      if (userRol != "ADMINISTRADOR") {
        console.log(userRol);
        this.administrador = false;
      }
    }
  }

}
