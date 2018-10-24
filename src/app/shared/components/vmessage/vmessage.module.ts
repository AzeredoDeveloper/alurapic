import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VMessageComponent } from './vmessage.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        VMessageComponent        
    ],
    declarations: [
        VMessageComponent
    ]
})
export class VMessageModule {
    
}