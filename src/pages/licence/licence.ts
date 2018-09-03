import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var firebase;
import userid from '../../app/array';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the LicencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-licence',
  templateUrl: 'licence.html',
})
export class LicencePage {

  ref: string = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    firebase.database().ref('users/'+userid+'/Licence/').on('value', (data)=>{
      var licence = data.val();
      var keys = Object.keys(licence);
      console.log(keys);
      
      for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        this.ref = licence[k].ref;
      }
      console.log(this.ref);
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LicencePage');
  }
  sbt(){
    this.navCtrl.push(PaymentPage);
  }
}
