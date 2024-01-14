// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FormReserverComponent } from './form-reserver/form-reserver.component';
// // import { FormulaireReserverComponent } from './formulaire-reserver/formulaire-reserver.component';
// import { ServeurLibreComponent } from './serveur-libre/serveur-libre.component';
// import { ServeursComponent } from './serveurs/serveurs.component';
// import { HistoriqueComponent } from './historique/historique.component';
// import { HttpClientModule} from '@angular/common/http';
// import { RubyService } from 'services/ruby.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UpdateServeurComponent } from './update-serveur/update-serveur.component';
// import { ServersDetailsComponent } from './servers-details/servers-details.component';
// import { DeleteServeurComponent } from './delete-serveur/delete-serveur.component';
// import { NewServerComponent } from './new-server/new-server.component';


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import {MessageModule} from 'ui-message-angular';

// All Routes
import { AppRoutingModule } from "./app-routing.module";


// All Services
import { RubyService } from "services/ruby.service";
import { TestService } from "services/test.services";

// All Components
import { AppComponent } from "./app.component";
import { FormReserverComponent } from "./form-reserver/form-reserver.component";
import { ServeurLibreComponent } from "./serveur-libre/serveur-libre.component";
import { ServeursComponent } from "./serveurs/serveurs.component";
import { HistoriqueComponent } from "./historique/historique.component";
import { UpdateServeurComponent } from "./update-serveur/update-serveur.component";
import { ServersDetailsComponent } from "./servers-details/servers-details.component";
import { DeleteServeurComponent } from "./delete-serveur/delete-serveur.component";
import { NewServerComponent } from "./new-server/new-server.component";
import { FormReserverTacheComponent } from './form-reserver-tache/form-reserver-tache.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';


// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    FormReserverComponent,
    ServeurLibreComponent,
    ServeursComponent,
    HistoriqueComponent,
    UpdateServeurComponent,
    ServersDetailsComponent,
    DeleteServeurComponent,
    NewServerComponent,
    FormReserverTacheComponent,
    AllReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,

    //MessageModule
  ],
  providers: [RubyService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
