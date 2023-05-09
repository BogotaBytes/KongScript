import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { EscenarioComponent } from './components/escenario/escenario.component';
import { BloqueComponent } from './components/bloque/bloque.component';
import { PlataformaComponent } from './components/plataforma/plataforma.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    EscenarioComponent,
    BloqueComponent,
    PlataformaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
