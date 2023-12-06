import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenciasMaterialModule } from './references/references';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RestaurantComponent } from './components/restaurant-component/restaurant-component.component';

@NgModule({
  declarations: [AppComponent, RestaurantComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReferenciasMaterialModule,
    NgxDatatableModule,
    RouterModule.forRoot([{ path: '', component: RestaurantComponent }]),
    FormsModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}