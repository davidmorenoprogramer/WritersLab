
import { NgModule } from '@angular/core';
import { Tab1Page } from './tab1.page';
import {PagesComponent} from '../component/pages/pages.component'
import { NewBookComponent } from '../component/new-book/new-book.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    //IonicModule,
    //CommonModule,
    //FormsModule,
    Tab1PageRoutingModule,
    
  ],
  declarations: [Tab1Page,PagesComponent,NewBookComponent]
})
export class Tab1PageModule {}
