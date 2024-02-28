import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconStoreComponent } from './icon-store.component';


@NgModule({
  declarations: [IconStoreComponent],
  exports: [IconStoreComponent],
  imports: [
    CommonModule
  ]
})
export class IconStoreModule { }
