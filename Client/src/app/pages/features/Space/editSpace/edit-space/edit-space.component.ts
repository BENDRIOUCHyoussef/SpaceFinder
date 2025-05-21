import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Space } from '../../models/space.model';
import { SpaceService } from '../../services/space.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpaceType } from '../../models/spaceType.model';
import { UpdateSpaceRequest } from '../../models/update-space.model';

@Component({
  selector: 'app-edit-space',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit-space.component.html',
  styleUrl: './edit-space.component.scss'
})
export class EditSpaceComponent implements OnInit, OnDestroy{
  id: string | null=null;
  routeSubscription? : Subscription;
  updateSpaceSubscription?: Subscription;
  getSpaceSubscription?: Subscription;
  model!: Space;
  isLoading: boolean = true;
  spaceTypeOptions = Object.values(SpaceType);

  constructor(private route: ActivatedRoute, private spaceService: SpaceService, private router:Router){}

  ngOnInit(): void {
    this.isLoading!
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id)
        {
          this.spaceService.getSpaceById(this.id).subscribe({
            next: (Response) => {
              this.model = Response;
              this.isLoading = false;
              this.getSpaceSubscription?.unsubscribe();
             
            },
            error: () => {
              this.isLoading = false;
            }
          });
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    
  }

  onFormSubmit(){
    //covert this model to request object
    if (this.model && this.id){
      var updateSpace: UpdateSpaceRequest ={
        title: this.model.title,
        description: this.model.description,
        address: this.model.address,
        postCode: this.model.postCode,
        city: this.model.city,
        price: this.model.price,
        deposit: this.model.deposit,
        billsIncluded: this.model.billsIncluded,
        availableFrom: this.model.availableFrom,
        spaceType: this.model.spaceType,
        numberOfRooms: this.model.numberOfRooms,
        numberOfBathrooms: this.model.numberOfBathrooms,
        furnished: this.model.furnished,
      };

      this.spaceService.updateSpace(this.id, updateSpace).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/my-listings');
          this.updateSpaceSubscription?.unsubscribe();
        }
      })
    }
  }
}
