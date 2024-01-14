import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { TestService } from "services/test.services";
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { DeleteServeurComponent } from '../delete-serveur/delete-serveur.component';
// import { DeleteServeurComponent } from '../delete-serveur/delete-serveur.component';

@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.css']
})
export class ServeursComponent {

   constructor(private rubyservice: RubyService,
     private route: ActivatedRoute,
    public _testService: TestService ,
){}
// private modalService: NgbModal
     serveurs: any[] = [];
   id:any;
  // selectedItem: any;
  ngOnInit(){
    this._testService.dataArray$.subscribe((array) => {
      this.serveurs = array;
    });
    this.listserveurs();
  }



    listserveurs  (){

  this.rubyservice.listserveurs().subscribe((status: any) => {
    this._testService.updateArray(status);
  });
}

// confirmDelete(serveur: any) {
//   const modalRef = this.modalService.open(DeleteServeurComponent); // Ouvrir la modale de confirmation
//   modalRef.componentInstance.serveur = serveur; // Passer le serveur à la modale

//   modalRef.result.then(
//     () => {
//       // Exécuté si la suppression est confirmée
//       this.rubyservice.libererserveur(serveur.id).subscribe(
//         () => {
//           console.log('Serveur supprimé :', serveur);
//           this._testService.updateArray(this.serveurs.filter(s => s.id !== serveur.id));
//         },
//         (error) => {
//           console.error('Erreur lors de la suppression :', error);
//         }
//       );
//     },
//     () => {
//       // Exécuté si la suppression est annulée
//       console.log('Suppression annulée');
//     }
//   );
// }








}



 //     const paramId = this.route.snapshot.paramMap;
  //      this.id=Number(paramId.get('serveurId'));
  //     console.log(this.id);
  //   this.serveurs=this.rubyservice.listserveurs().subscribe(
  //     status=>{
  //       this.serveurs=status
  //       console.log(this.serveurs);
  //       // this.serveurs.status="booked";

  //     }
  //   )
  // }





