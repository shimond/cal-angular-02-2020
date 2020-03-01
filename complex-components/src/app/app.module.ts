import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { CreditCardManagmentComponent } from './credit-card-managment/credit-card-managment.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardTypeIconComponent } from './credit-card-type-icon/credit-card-type-icon.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { TestPipe } from './pipes/test.pipe';
import { CreditCardService, CreditCardMockService } from './services/credit-card.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    CreditCardManagmentComponent,
    CreditCardListComponent,
    CreditCardTypeIconComponent,
    CreditCardDetailsComponent,
    TestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CreditCardService,
    // same as:
    // { provide: CreditCardService, useClass: CreditCardService },
    {
      provide: CreditCardService,
      useClass: environment.useMock ? CreditCardMockService : CreditCardService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
