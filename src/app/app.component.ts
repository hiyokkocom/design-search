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
    "http://nenga.aisatsujo.jp/images/items/N17C009b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C010b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C011b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C012b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C013b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C014b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C015b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C016b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C017b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C018b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C019b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C020b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C021b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C022b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C023b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C024b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C025b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C026b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C027b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C028b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C029b.jpg",
    "http://nenga.aisatsujo.jp/images/items/N17C030b.jpg",
  ];
}
