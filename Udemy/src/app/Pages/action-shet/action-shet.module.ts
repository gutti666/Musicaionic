import { ComponentesModule } from './../../componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionShetPageRoutingModule } from './action-shet-routing.module';


import { ActionShetPage } from './action-shet.page';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionShetPageRoutingModule,ComponentesModule
  ],
  declarations: [ActionShetPage]
})
export class ActionShetPageModule {}
