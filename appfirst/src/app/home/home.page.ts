import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alerCtrl: AlertController, private navCtrl: NavController) {}
   "object or instance = type"

  async showLoading(){
    let loading = await this.loadingCtrl.create({
      message: "Loading...",
      duration: 5000, 
      showBackdrop: false,
      spinner: "circles"
    
    })
      loading.present();

 
    
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      message: "this is a toast notification", 
      duration: 5000, 
      color: "dark"
    });
    toast.present();

  }
  async showAlert(){
    let alert = await this.alerCtrl.create({
      header: "Are you sure",
      subHeader: "This action Cannot be undone",
      message: " Are you sure you want to delete this entry from the database? This process is not reversible.",
      inputs: [{
        name: "username",
        type: "text",
        placeholder: "hotel"
      }, 
      {
        name: "email",
        type: "email",
        placeholder: "book"
      }],
      buttons: [{
        text: "Concel",
        handler: () => {
        }
      }, {
        text: "Delete",
        handler: (data) => {
          console.log(data)
        }
            }]
    })
    alert.present();

  }
  gotoProperty() {
    this.navCtrl.navigateForward("/property/1234");

  }
}
