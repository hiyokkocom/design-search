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
    { icon: "label", title: "クラフト" },
    { icon: "label_outline", title: "イラスト" },
    { icon: "label_outline", title: "写真" },
    { icon: "label_outline", title: "シンプル" },
    { icon: "label_outline", title: "ねこ" },
    { icon: "label_outline", title: "写真が2点" },
    { icon: "label_outline", title: "写真が3点" }
  ];

  items = [
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C001&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140061",
      media: "http://nenga.aisatsujo.jp/images/items/N17C001b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C002&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140062",
      media: "http://nenga.aisatsujo.jp/images/items/N17C002b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C003&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140063",
      media: "http://nenga.aisatsujo.jp/images/items/N17C003b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C004&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140064",
      media: "http://nenga.aisatsujo.jp/images/items/N17C004b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C005&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140065",
      media: "http://nenga.aisatsujo.jp/images/items/N17C005b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C006&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140066",
      media: "http://nenga.aisatsujo.jp/images/items/N17C006b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C007&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140067",
      media: "http://nenga.aisatsujo.jp/images/items/N17C007b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C008&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140068",
      media: "http://nenga.aisatsujo.jp/images/items/N17C008b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C009&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140069",
      media: "http://nenga.aisatsujo.jp/images/items/N17C009b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C010&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140070",
      media: "http://nenga.aisatsujo.jp/images/items/N17C010b.jpg"
    },

    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C011&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140071",
      media: "http://nenga.aisatsujo.jp/images/items/N17C011b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C012&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140072",
      media: "http://nenga.aisatsujo.jp/images/items/N17C012b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C013&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140073",
      media: "http://nenga.aisatsujo.jp/images/items/N17C013b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C014&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140074",
      media: "http://nenga.aisatsujo.jp/images/items/N17C014b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C015&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140075",
      media: "http://nenga.aisatsujo.jp/images/items/N17C015b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C016&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140076",
      media: "http://nenga.aisatsujo.jp/images/items/N17C016b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C017&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140077",
      media: "http://nenga.aisatsujo.jp/images/items/N17C017b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C018&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140078",
      media: "http://nenga.aisatsujo.jp/images/items/N17C018b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C019&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140079",
      media: "http://nenga.aisatsujo.jp/images/items/N17C019b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C020&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140080",
      media: "http://nenga.aisatsujo.jp/images/items/N17C020b.jpg"
    },

    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C021&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140081",
      media: "http://nenga.aisatsujo.jp/images/items/N17C021b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C022&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140082",
      media: "http://nenga.aisatsujo.jp/images/items/N17C022b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C023&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140083",
      media: "http://nenga.aisatsujo.jp/images/items/N17C023b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C024&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140084",
      media: "http://nenga.aisatsujo.jp/images/items/N17C024b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C025&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140085",
      media: "http://nenga.aisatsujo.jp/images/items/N17C025b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C026&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140086",
      media: "http://nenga.aisatsujo.jp/images/items/N17C026b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C027&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140087",
      media: "http://nenga.aisatsujo.jp/images/items/N17C027b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C028&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140088",
      media: "http://nenga.aisatsujo.jp/images/items/N17C028b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C029&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140089",
      media: "http://nenga.aisatsujo.jp/images/items/N17C029b.jpg"
    },
    {
      url: "http://nenga.aisatsujo.jp/item/detail?it=N17C030&cm=nenga&gr=n_genre&tag=n_craft&item_tag_sid=140090",
      media: "http://nenga.aisatsujo.jp/images/items/N17C030b.jpg"
    },
  ];
}
