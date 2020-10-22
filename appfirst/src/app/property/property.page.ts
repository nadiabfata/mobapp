import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
   }

  ngOnInit() {
  }

}
