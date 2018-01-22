import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable()
export class RestProvider {

  constructor(private http: Http) {
    
  }

  getData() {
    var url = 'http://www.crotonesport.com/?json=get_posts';
    var response = this.http.get(url).map(res => res.json());
    console.log(response);
    return response;   
      }    

  getDataFc() {
     var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=3';
     var response = this.http.get(url).map(res => res.json());
     console.log(response);
     return response;   
      }
            
   getDataEccellenza() {
        var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=4';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;   
      }

    getDataPromozione() {
        var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=5';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;   
      }
      
      getDataPrima() {
        var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=6';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;
      }

      getDataSeconda() {
        var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=29';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response;
      }

      getDataTerza() {
        var url = 'http://www.crotonesport.com/?json=get_category_posts&category_id=8';
        var response = this.http.get(url).map(res => res.json());
        console.log(response);
        return response; 
      }

}


 