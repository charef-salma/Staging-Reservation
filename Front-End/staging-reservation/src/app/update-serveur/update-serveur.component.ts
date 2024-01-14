import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-update-serveur',
  templateUrl: './update-serveur.component.html',
  styleUrls: ['./update-serveur.component.css']
})
export class UpdateServeurComponent {
  update:any;
  BookForm!: FormGroup;
  id:any;
  private ancienNom: any;


  constructor(private rubyservice: RubyService,private route: ActivatedRoute,
    private router: Router){

       const paramId = this.route.snapshot.paramMap;
       this.id=Number(paramId.get('serveurId'));
      console.log(this.id);
      this.rubyservice.findserveur(this.id).subscribe(
        (update) => {
           this.update=update

           this.BookForm= new FormGroup({

          nom: new FormControl(this.update.nom)

          // status: new FormControl(this.update.periode),



        });

        this.ancienNom = this.update.nom;

}

      )



    }
  ngOnit(){
  //   this.route.queryParams.subscribe(params=>{
  //     this.id= params['serveurId'];
  //    } );
  //  console.log(this.id)
 }


onSubmit(){
   console.log(this.BookForm.value);
  this.rubyservice.updateserveur(this.BookForm.value,this.id).subscribe(
    (update :any)=>{
      // if (update.nom !== this.ancienNom ) { // Vérifiez si le nom a été modifié
        // alert(`${this.update.nom} a été mis à jour avec succès.`);
        console.log("Réservation du serveur mise à jour avec succès");

        this.router.navigate(['/servers']);
        // this.ancienNom = update.nom;
      }
    //  else {
    //   alert("Aucune modification du nom détectée.");
    //   console.log("Aucune modification du nom détectée.");
    //  }
    // }

  )

 }


}
