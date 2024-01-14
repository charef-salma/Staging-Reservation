import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { TestService } from "services/test.services";
@Component({
  selector: 'app-serveur-libre',
  templateUrl: './serveur-libre.component.html',
  styleUrls: ['./serveur-libre.component.css']
})
export class ServeurLibreComponent {
  newserveur :any;
  liberer:any ;
  update :any;
  id :any;
  serveurs: any[] = [];
  // route: any;
  constructor(private rubyservice: RubyService ,    private route: ActivatedRoute,
    private _testService: TestService,
    private router: Router){
    const paramId = this.route.snapshot.paramMap;
       this.id=Number(paramId.get('serveurId'));

       console.log(this.id);

  }

  ngOnInit(){

    // this.rubyservice.findserveur( this.id).subscribe(
    //   (newserveur)=>{
    //     this.newserveur=newserveur

    //     console.log(this.newserveur)
    //     console.log("it's me")



    // )
    //  this.rubyservice.Status_free(this.newserveur,this.id).subscribe(
    //   (update)=>{
    //     this.update=update
    //     console.log(this.update)
    //     // console.log("status server updated Successufully to free " )
    //   }
    //  )

  //   this.rubyservice.findserveur(this.id).subscribe(
  //     (update)=>{
  //       this.update=update;
  //    this.rubyservice.libererserveur(this.id).subscribe((liberer ) =>{
  //     this.liberer=liberer;

  //    console.log( this.liberer);
  //    }
  //    );
  //  }
  //   );

  this.rubyservice.findserveur(this.id).subscribe((newserveur) => {
    this.newserveur = newserveur;
  });
  this.rubyservice.Status_free(this.newserveur, this.id).subscribe((update) => {
    this.listServeurs()
    this.router.navigate(['/historique']);

  });
}

listServeurs() {
  this.rubyservice.listserveurs().subscribe(
    (status: any) => {
      this.serveurs = status;
      this._testService.updateArray(status)
    },
    (error) => {
      console.error("Error fetching serveurs:", error);
    }
  );


  }


}










