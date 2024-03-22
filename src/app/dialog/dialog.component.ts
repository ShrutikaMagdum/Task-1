import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../shared/services/http-data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.scss']
})
export class DialogComponent implements OnInit{
  productForm: FormGroup | any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private dialog: MatDialog, private httpServ : HttpService) {}
  ngOnInit(): void {
    this.productForm = this.fb.group({
      productImg: this.fb.control('', Validators.required),
      productName: this.fb.control('', Validators.required),
      productPrice: this.fb.control('', Validators.required),
      productQuantity: this.fb.control('0')
    });
    this.httpServ.getProducts();
  }
 
  onSubmit(){
    console.log(this.productForm.value);
    this.httpServ.postProduct(this.productForm.value);
    this.productForm.reset();
  }
  
  }
  


