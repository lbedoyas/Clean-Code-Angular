import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListboxModule,
    ButtonModule,
    TableModule,
    InputTextModule
  ],
  exports: [
    ListboxModule,
    ButtonModule,
    ListboxModule,
    TableModule,
    InputTextModule
  ]
})
export class PrimengModule { }
