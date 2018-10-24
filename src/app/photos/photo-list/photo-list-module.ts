import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchModule } from './search/search.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    imports: [  
        CommonModule,
        PhotoModule,
        CardModule,
        SearchModule,
        DarkenOnHoverModule
    ],
    declarations: [
        LoadButtonComponent,
        PhotosComponent,
        FilterByDescription,
        PhotoListComponent
        
    ]
})
export class PhotoListModule {

}