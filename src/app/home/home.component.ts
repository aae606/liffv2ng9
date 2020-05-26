import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { LIFFErrorObject } from 'liff-type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  os: string;
  language: String;
  version: String;
  isInClient: boolean;
  isLogin: boolean;
  constructor() {}

  ngOnInit() {
    this.main()    
  }

  main() {
    liff.init({ liffId: '1654187718-l0z2DKvr'})
    .then( () => {
      if ( !liff.isLoggedIn() ) {
        // liff.login()
        console.log('log out');
        
      } else {
        // liff.login()
       console.log('login');
      this.isLogin = liff.isLoggedIn()
        
      }
      

    })
    .catch( (err: LIFFErrorObject) => console.error(err.message))    
  }
  logIn() {
    liff.login()
  }
  logOut() {
    liff.logout()
    window.location.reload()   
  }
  async getUserProfile() {
    const profile = await liff.getProfile()

  }

  
}
