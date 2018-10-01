import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../service/desafio.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {
  lista:Observable<any[]>;

  formSearch: FormGroup;

  constructor(public service: DesafioService, private alertService: AlertService) { }

  ngOnInit() {
    this.findAll();
    this.initForm();
  }


  findAll(){
    this.lista = this.service.findAll();
  }

  initForm(){
    this.formSearch = new FormGroup({
      'filter': new FormControl('', Validators.required)
    });
  }

  findVogal(){
    if(this.formSearch.valid){
      let data = this.formSearch.value;
      this.service.findVogal(data.filter).subscribe(val=>{
        if( val.response.length > 1 ){
          this.alertService.warn(val.response);
        }else{
          this.alertService.success(val.response);
        }
        this.findAll();
      }, erro =>{
        this.alertService.error(erro.json().message);
      });
    }
  }

}
