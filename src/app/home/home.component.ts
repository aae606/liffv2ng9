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
  constructor() {}

  ngOnInit() {
    this.main()    
  }

  main() {
    liff.init({ liffId: '1654187718-l0z2DKvr'})
    .then( () => {
      if ( !liff.isLoggedIn ) {
        // liff.login()

      } else {
        // liff.login()
      }


    })
    .catch( (err: LIFFErrorObject) => console.error(err.message))    
  }
  logIn() {
    liff.login()
  }
  logOut() {
    liff.logout()
    console.log('logout');
    
  }

  
}
