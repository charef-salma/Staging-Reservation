import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { TestService } from 'services/test.services';

@Component({
  selector: 'app-servers-details',
  templateUrl: './servers-details.component.html',
  styleUrls: ['./servers-details.component.css']
})
export class ServersDetailsComponent {
  serveurs: any;
  id:any ;
  afficherColonneReserver: boolean = false;

  constructor(private rubyservice: RubyService , private route: ActivatedRoute,
    private _testService: TestService ,  ){
      const paramId = this.route.snapshot.paramMap;
    this.id=Number(paramId.get('serveurId'));
    console.log(this.id);


    }

  ngOnInit(){



     this.ServeursList()
  }
   ServeursList(){
     this.rubyservice.ViewServeur(this.id).subscribe(
      (serveur )=>{

        this.serveurs=serveur
        // this.serveurs.serveurs_name
        this.afficherColonneReserver = true;
        console.log(this.serveurs);
        }

     );

    // this._testService.dataArray$.subscribe(serveurs=>{
    //   this.serveurs = serveurs;
    //   console.log(this.serveurs);
    // });

    // })
    // this.listServeurs()
  }
    listServeurs() {
     this.rubyservice.ViewServeur(this.id).subscribe(
       (serveur: any) => {

        this._testService.updateArray(serveur)
      },
      (error) => {
        console.error("Error fetching serveurs:", error);
      }
    );
  }


}
