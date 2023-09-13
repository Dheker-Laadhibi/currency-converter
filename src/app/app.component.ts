import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  currjson:any=[];
  base='USD';
  cont2='USD';
  result:string='1';



  changebase(a:string){
    this.base=a;
    console.log(this.base);
    
  }
  tocountry(b:string){
    this.cont2=b;
    console.log(this.cont2);
    
  }
  constructor(private currency:CurrencyService){}
  convert(){
    //console.log(this.base);
    //console.log(this.cont2);
    this.currency.getCurrencyData(this.base).subscribe(data=>{
      //console.log(data);
      this.currjson = JSON.stringify(data);
   // console.log(this.currjson);
    this.currjson=JSON.parse(this.currjson)
    console.log(this.currjson);
  
if(this.cont2=='USD'){
  this.result=this.currjson.rates.USD
 
}
if(this.cont2=='INR'){
  this.result=this.currjson.rates.INR
}
if(this.cont2=='EUR'){
  this.result=this.currjson.rates.EUR
}
if(this.cont2=='TND'){
  this.result=this.currjson.rates.TND
}






    })


  }
 
}
