import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MaterialModule
    ],
    declarations: []
})

export class HomeModule {}
