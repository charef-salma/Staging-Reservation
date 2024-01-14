import { Component, Input } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RubyService } from 'services/ruby.service';
import { TestService } from "services/test.services";
@Component({
  selector: 'app-form-reserver',
  templateUrl: './form-reserver.component.html',
  styleUrls: ['./form-reserver.component.css']
})
export class FormReserverComponent {
  reserver:any;
  msg:any;
  id:any;
  BookForm: FormGroup;
  alerteAffichee: boolean = false;
  newserveur:any;
  update :any;
  serveurs: any[] = [];
  users: string[] = ['Youssef', 'Ahmed', 'Rahma', 'Toutou', 'Seif', 'Riadth', 'Ameur'];
  specialities: string[] = ['QA', 'DevOps', 'Backend', 'FrontEnd'];
  userSpecialities: { [user: string]: string } =
  { 'Youssef': 'DevOps',
    'Ahmed': 'Backend',
    'Rahma': 'Backend',
    'Toutou': 'Backend',
    'Seif': 'FrontEnd',
    'Riadth': 'FrontEnd',
    'Ameur': 'QA'
  };



  //  BookForm = new FormGroup({
  //     nom: new FormControl(''),
  //     serveur_name: new FormControl(''),
  //     specialite: new FormControl(''),
  //     periode: new FormControl(''),




    // serveur_id: new FormControl('paramId'),


  // });


  constructor(private rubyservice: RubyService, private route: ActivatedRoute,
    private _testService: TestService ,
    private formBuilder: FormBuilder,
    private router: Router
    ){

        this.BookForm = this.formBuilder.group({
          nom: ['', Validators.required],
          serveur_name: ['', Validators.required],
          specialite: ['', Validators.required],
          periode: ['', Validators.required]
        });
      }








  ngOnInit(){
    console.log({ filterSpecialiteByUser: this.filterSpecialiteByUser() });
    console.log({ users: this.users });
    const paramId = this.route.snapshot.paramMap;
    this.id=Number(paramId.get('serveurId'));

    console.log(this.id);
     this.rubyservice.findserveur( this.id).subscribe(
        (update)=>{
       this.update=update
       this.BookForm.patchValue({
       serveur_name: this.update.nom
     })
     ;

    }

 )
  }
  onSubmit(){
    if (this.BookForm.valid){
    this.rubyservice.Reserverserveur(this.BookForm.value,this.id).subscribe(
      reserver=>{
        if (!this.alerteAffichee) {
          alert(`${this.update.nom} reserved successfully `);
          this.alerteAffichee = true;
        }
        this.reserver=reserver
        console.log(this.reserver)
        console.log(this.BookForm.value);
         this.msg="serveur reserver ";
        console .log(this.msg)

        // alert("Server booked successfully ")

        this.changeServerStatus();
        this.router.navigate(['/details']);
      }
    );



  }
}

  changeServerStatus(){
    // const newStatus = { status: 'booked' };
    this.rubyservice.findserveur( this.id).subscribe(
      (newserveur)=>{
        this.newserveur=newserveur

        console.log(this.newserveur)
        console.log("it's me")


      }
    );
    this.rubyservice.Status(this.newserveur, this.id).subscribe((update) => {
      this.listServeurs()
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







//
filterSpecialiteByUser(): string[] {
  const selectedControl = this.BookForm.get('nom');
  const specialiteControl = this.BookForm.get('specialite');

  if (selectedControl && specialiteControl) {
    const selectedSpeciality = specialiteControl.value;
    const selectedUser = selectedControl.value;

    if (selectedUser && selectedUser !== "") {
      // if (selectedSpeciality) {
        return [this.userSpecialities[selectedUser]];
      // } else {
      //   return [this.userSpecialities[selectedUser], ...this.specialities];
      // }
    } else {
      return this.specialities;
    }
   } else {
     return this.specialities;
   }
}




























}
