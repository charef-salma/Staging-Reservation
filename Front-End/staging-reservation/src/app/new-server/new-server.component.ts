import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { TestService } from "services/test.services";

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent {
  addserver: any ;
   serveurs: any ;

  BookForm = new FormGroup({
    nom: new FormControl(''),

    // status: new FormControl('')
  });

  constructor(private rubyservice: RubyService ,
    private _testService: TestService ,
    private router: Router){}


  onSubmit(){
    this.rubyservice.Addserveur(this.BookForm.value).subscribe(
      addserver=>{
        console.log(addserver)
        this.addserver=addserver
        console.log(this.addserver)

        console.log(this.BookForm.value);

        // console .log("serveur ajouté")

        if (this.addserver.nom) {
          console.log("Serveur ajouté avec succès");
          alert(`Server ${this.addserver.nom} added successfully`);
        } else {
          console.log("Échec de l'ajout du serveur");
          alert("Failed to add server");
        }
        this.router.navigate(['/servers']);
      }
    );



}
Addserver(){
  this.rubyservice.listserveurs().subscribe((update) => {
    this.listServeurs()
  });


}

listServeurs() {
  this.rubyservice.listserveurs().subscribe(
    (status: any) => {

      this.serveurs=status;
      this._testService.updateArray(this.serveurs)
    },
    (error) => {
      console.error("Error fetching serveurs:", error);
    }
  );
}












}
