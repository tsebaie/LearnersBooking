import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import userid from '../../app/array';
declare var firebase;
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  ref: string = " ";
  fname: string = " ";
  lname: string = " ";
  Idno:string = " ";
  Race: string = " ";
  gender: string = " ";
  nationality: string = " ";
  language:string = " ";
  streetadress: string = " ";
  province:string = " ";
  postalcode:string = " ";
  telephoneno: string = " ";
  code:string = " ";
  LicenceNo: string = " ";
  // url:any='blank';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('users/'+userid+'/Licence/').on('value', (data)=>{
      var licence = data.val();
      var keys = Object.keys(licence);
      console.log(keys);
      
      for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        this.ref = licence[k].ref;
        this.fname = licence[k].fname;
        this.lname = licence[k].lname;
        this.Idno = licence[k].Idno;
        this.Race = licence[k].Race;
        this.gender = licence[k].gender;
        this.nationality = licence[k].nationality;
        this.language = licence[k].language;
        this.streetadress = licence[k].streetadress;
        this.province = licence[k].province;
        this.postalcode = licence[k].postalcode;
        this.telephoneno = licence[k].telephoneno;
        this.code = licence[k].code;
        this.LicenceNo = licence[k].LicenceNo;
        // this.url=licence[k].url;
      } 
    })
    {
      firebase.database().ref('users/'+userid+'/Leaners/').on('value', (data)=>{
        var Leaners = data.val();
        var keyss = Object.keys(Leaners);
        console.log(keyss);
        
        for(var i = 0; i < keyss.length; i++){
          var J = keyss[i];
          this.ref = Leaners[J].ref;
          this.fname = Leaners[J].fname;
          this.lname = Leaners[J].lname;
          this.Idno = Leaners[J].Idno;
          this.Race = Leaners[J].Race;
          this.gender = Leaners[J].gender;
          this.nationality = Leaners[J].nationality;
          this.language = Leaners[J].language;
          this.streetadress = Leaners[J].streetadress;
          this.province = Leaners[J].province;
          this.postalcode = Leaners[J].postalcode;
          this.telephoneno = Leaners[J].telephoneno;
          this.code = Leaners[J].code;
          this.LicenceNo = Leaners[J].LicenceNo;
          // this.url=Leaners[J].url;
        } 
      })
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  
}
