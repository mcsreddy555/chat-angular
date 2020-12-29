import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './component/chat-box/chat-box.component';
import { NotificationsComponent } from './component/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
