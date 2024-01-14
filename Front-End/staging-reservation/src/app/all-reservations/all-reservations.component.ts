import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RubyService } from 'services/ruby.service';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent {
  serveurs:any ;
  id:any;

  createdReservations: any[]=[];


  constructor(private rubyservice: RubyService, private route: ActivatedRoute,){}

  ngOnInit(){
    // const paramId = this.route.snapshot.paramMap;
    //    this.id=Number(paramId.get('serveurId'));
    //    console.log(this.id);
    this.ServeursList()
  }


  ServeursList(){
    this.rubyservice.allreservations().subscribe(
      data => {
        this.createdReservations = (data as any ) .created_reservations;

      });


}
}
