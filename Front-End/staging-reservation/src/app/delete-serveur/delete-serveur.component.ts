import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { switchMap } from 'rxjs/operators';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Options } from '@popperjs/core';
//import { Message, MessageService } from 'ui-message-angular';

@Component({
  selector: 'app-delete-serveur',
  templateUrl: './delete-serveur.component.html',
  styleUrls: ['./delete-serveur.component.css']
})


export class DeleteServeurComponent {
  liberer: any;
  update: any;
  serveur: any;
  id: any;

  @Input() itemToDelete: any;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(private rubyservice: RubyService, private route: ActivatedRoute,
    private router: Router
  ) {

    // public modal: NgbActiveModal
    const paramId = this.route.snapshot.paramMap;
    this.id = Number(paramId.get('serveurId'));
    console.log(this.id);
    this.rubyservice.findserveur(this.id).subscribe((data) => {
      this.itemToDelete = data
      // console.log(this.serveur);
    }
    );


  }

  confirmDelete() {

  }


    // this.rubyservice.findserveur(this.id).pipe(
    //   switchMap(update => {
    //     this.update = update;
    //     return this.rubyservice.libererserveur(this.id);
    //   })
    // ).subscribe(
    //   liberer => {
    //     this.liberer = liberer;
    //     console.log(this.liberer);
    //   },
    //   error => {
    //     console.error('An error occurred:', error);
    //   }
    // );

    ngOnInit() {
    this.rubyservice.findserveur(this.id).subscribe(() => {

       if (confirm (`Are you sure you want to delete ${this.itemToDelete.nom}`)){
      //this.messageService.report(<Message>`Are you sure you want to delete "${this.itemToDelete.nom}"`);
      this.rubyservice.libererserveur(this.id).subscribe(() => {
        console.log("Server is deleted ");
        alert("Server deleted successfully ")
        this.router.navigate(['/servers']);


      });
    }
    //);
   });



}

}
