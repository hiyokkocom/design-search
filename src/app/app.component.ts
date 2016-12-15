import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('tagInput') tagInput: MdInput;

  // ngAfterViewInit() {
  //   this.tagInput.focus();
  // }

  tags = [
    { icon: "label", title: "イラスト" },
    { icon: "label_outline", title: "写真" },
    { icon: "label_outline", title: "シンプル" },
    { icon: "label_outline", title: "ねこ" },
    { icon: "label_outline", title: "写真が2点" },
    { icon: "label_outline", title: "写真が3点" }
  ];

  items = [
    "http://nenga.aisatsujo.jp/images/items/N17C001b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C002b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C003b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C004b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C005b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C006b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C007b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C008b.jpg",
  ];
}
