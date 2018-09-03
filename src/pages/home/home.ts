import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import userId from '../../app/array';
import { LicencePage } from '../licence/licence';
declare var firebase;
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // url: any =  'blank';
  fname: string;
  lname: string;
  Idno: string;
  Race: string;
  gender: string;
  nationality: string;
  language: string;
  streetadress: string;
  province: string;
  postalcode: string;
  code: string;
  telephoneno: string;
  LicenceNo: string;


  drivingschool;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.drivingschool = "learners";

  }
  submit() {
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }


    firebase.database().ref('users/' + userId + '/Leaners').push({
      fname: this.fname,
      lname: this.lname,
      Idno: this.Idno,
      Race: this.Race,
      gender: this.gender,
      nationality: this.nationality,
      language: this.language,
      streetadress: this.streetadress,
      province: this.province,
      postalcode: this.postalcode,
      telephoneno: this.telephoneno,
      code: this.code,
      // url:this.url
    }, (error) => {
      alert(error);
    });
    this.navCtrl.push(LicencePage);
  }
  submit1() {
    var text = " ";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }


    firebase.database().ref('users/' + userId + '/Licence').push({
      fname: this.fname,
      lname: this.lname,
      Idno: this.Idno,
      Race: this.Race,
      gender: this.gender,
      nationality: this.nationality,
      language: this.language,
      streetadress: this.streetadress,
      province: this.province,
      postalcode: this.postalcode,
      telephoneno: this.telephoneno,
      LicenceNo: this.LicenceNo,
      // url: this.url,
      ref: text
    }, (error) => {
      alert(error);
    });
    this.navCtrl.push(LicencePage);
    // console.log(this.url);
  }
  // stringGen()
  // {
  //     var text = " ";

  //     var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

  //     for( var i=0; i < 10; i++ )
  //         text += charset.charAt(Math.floor(Math.random() * charset.length));
  //     return text;
  // }

  // insertImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }

  //     reader.readAsDataURL(event.target.files[0]);
  //     console.log(event.target.files);
  //     console.log(this.url);
      
  //   }
  // }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}

