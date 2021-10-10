import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListboxModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    ListboxModule,
    ButtonModule,
    ListboxModule,
    TableModule
  ]
})
export class PrimengModule { }
