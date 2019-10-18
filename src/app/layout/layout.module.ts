import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';


import { AboutComponent, FirstComponent } from './components';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, FirstComponent],
    exports: [AboutComponent]
})
export class LayoutModule { }
