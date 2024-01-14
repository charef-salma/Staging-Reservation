import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServeursComponent } from './serveurs/serveurs.component';
import { ServeurLibreComponent } from './serveur-libre/serveur-libre.component';
import { FormReserverComponent } from'./form-reserver/form-reserver.component';
import { UpdateServeurComponent } from './update-serveur/update-serveur.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ServersDetailsComponent } from './servers-details/servers-details.component';
import { NewServerComponent } from './new-server/new-server.component';
import { DeleteServeurComponent } from './delete-serveur/delete-serveur.component';
import { FormGroupDirective } from '@angular/forms';
import { FormReserverTacheComponent } from './form-reserver-tache/form-reserver-tache.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';

const routes: Routes = [

  { path: '', redirectTo: '/details', pathMatch: 'full' }, // Redirection vers la page "Servers"

{
 path:'servers',component:ServeursComponent,

},
{
  path:'libere/:serveurId', component: ServeurLibreComponent
},
{
  path :'booking/:serveurId',component:FormReserverComponent,
},
{
  path :'booking_for_Task/:serveurId',component:FormReserverTacheComponent
},


{
 path: 'update/:serveurId',component: UpdateServeurComponent
},
{
  path:'historique',component:HistoriqueComponent
},
{
  path:'details',component:AllReservationsComponent
},



{
  path:'details/:serveurId',component:ServersDetailsComponent
},
{
  path:'Update_server/:serveurId',component:UpdateServeurComponent
},
{
  path:'New_server',component:NewServerComponent
},
{
  path:'delete_server/:serveurId',component:DeleteServeurComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
