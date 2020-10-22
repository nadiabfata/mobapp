import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit {
  product: any[] = [];

  constructor() {
    this.getDocuments();
    
   }
   createDocument() {
    
      firebase.firestore().collection("products").add({
        "product_name": "sumsong",
        "product_price": "900"
      }).catch((err) => {
        console.log(err);
      })
     }
getDocuments() {
  firebase.firestore().collection("products")
  //.where("product_price", "<", 900)
  .orderBy("product_price", "asc")
  .get().then((queryDocumentSnapshot) => {
      console.log(queryDocumentSnapshot);

      this.product = queryDocumentSnapshot.docs;
      
    }).catch((err) => {
      console.log(err);
    })
  }
  ngOnInit() {
  }


}
