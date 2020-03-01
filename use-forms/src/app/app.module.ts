import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.module.routing';
import { KefelBoardComponent } from './kefel-board/kefel-board.component';
import { CalcResultComponent } from './calc-result/calc-result.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPersonComponent,
    HomeComponent,
    AboutComponent,
    KefelBoardComponent,
    CalcResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // set routing rules
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
