import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet]
    ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';
  text:string="EMRE CANDAN"

  arr:number[]=[]
  sayi:number=10;
   findPrimeNumber(){
    while(this.sayi<100){
      this.sayi++
      if(this.sayi%2!=0 && this.sayi%3!=0 && this.sayi%5!=0&&this.sayi%7!=0){
        this.arr.push(this.sayi)
      }
    }
  }


  sayac:number=1;
  tek:number=0;
  cift:number=0;
  sonuc:any=0;
  nOp(){
    let sonuc:any = 0
    while(this.sayac<500){
      this.sayac++
      if(this.sayac%2==0){
        this.cift+=this.sayac
      }else{
        this.tek+=this.sayac
      }
    }
    sonuc =this.cift-this.tek
    this.sonuc=sonuc>0?`Sonuç :${sonuc} Çifttir`:`Sonuç:${sonuc} Tektir`
  };
  x:number=0;
  y:number=0;
  z:number=0;
  calculate(){
    let sonuc:string="";
    if(this.x==this.y){
      if(this.y==this.z){
        sonuc=`Eşkenardır.`
      }else{sonuc=`İkizkenardır.`}
    }else if(this.x==this.z){
      if(this.z==this.y){
        sonuc=`Eşkenardır.`
      }else{sonuc=`İkizkenardır.`}
    }else{`Çeşitkenardır.`}
  return sonuc
  }
}
