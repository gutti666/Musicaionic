import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from './../../componentes/componentes.module';

import { IonicModule } from '@ionic/angular';

import { BotonesPageRoutingModule } from './botones-routing.module';

import { BotonesPage } from './botones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonesPageRoutingModule,ComponentesModule
  ],
  declarations: [BotonesPage]
})
export class BotonesPageModule {}
