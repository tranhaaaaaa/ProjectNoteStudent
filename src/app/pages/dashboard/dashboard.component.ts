import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit{
  public onGetData : any;
  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    this.loadData();
  }
  getAll():Observable<any>{
    return this.httpClient.get<any>('https://catfact.ninja/fact').pipe(
    )
  }
  loadData(){
    this.getAll().subscribe((data) =>{
      this.onGetData = data.fact;
      console.log(this.onGetData);
    })
  }
}
