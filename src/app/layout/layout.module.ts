import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';


import { AboutComponent, FirstComponent } from './components';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, FirstComponent, LoginComponent],
    exports: [AboutComponent]
})
export class LayoutModule { }
