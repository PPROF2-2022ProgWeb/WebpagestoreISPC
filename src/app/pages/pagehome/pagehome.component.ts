import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'pagehome',
  templateUrl: './pagehome.component.html',
  styleUrls: ['./pagehome.component.css'],
},
)
export class PagehomeComponent implements OnInit {

  title=''
  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get("http://localhost:8080/nombre",{responseType: 'text'}).subscribe((resp:any) =>{
      if(resp=='Cerso'){
        this.title="El nombre es Cerso"
      }else{
      this.title= resp;
    }
    })
  }

}
