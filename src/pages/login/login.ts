import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
declare var firebase;
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  send(){
    this.navCtrl.setRoot(SignupPage);
  }
  move(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      var user = firebase.auth().currentUser;
      console.log(user.uid);
      
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        password: password
      });
      this.navCtrl.push(HomePage);
    }, (error)=>{
      alert(error)
    })
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
  }
  ngOnInit() {

    this.user = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    // mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
    });
    } 
    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
    }
}
