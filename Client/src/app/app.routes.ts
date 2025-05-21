import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ListingCreationComponent } from './pages/features/Space/createSpace/listing-creation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyListingsComponent } from './pages/mySpaces/my-listings.component';
import { EditSpaceComponent } from './pages/features/Space/editSpace/edit-space/edit-space.component';
import { ImageUploadComponent } from './shared/components/image-upload/image-upload/image-upload.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./pages/home/home.component').then(m => m.HomeComponent)
        },
      },

      
      {
        path: 'login',
        loadComponent: () => {
          return import('./pages/auth/login/login.component').then(m => LoginComponent)
        },
      },
      
      {
        path: 'signup',
        loadComponent: () => {
          return import('./pages/auth/signup/signup.component').then(m => SignupComponent)
        },
      },

      {
        path: 'add-listing',
        loadComponent: () => {
          return import('./pages/features/Space/createSpace/listing-creation.component').then(m => ListingCreationComponent)
        }
      },
      {
        path: 'my-listings',
        loadComponent: () => {
          return import('./pages/mySpaces/my-listings.component').then(m => MyListingsComponent)
        }
      },
      {
        path: 'edit-space/:id',
        loadComponent: () => {
          return import('./pages/features/Space/editSpace/edit-space/edit-space.component').then(m => EditSpaceComponent)
        }
      },
      { path: 'upload-images/:id', 
        loadComponent: () => {
          return import ('./shared/components/image-upload/image-upload/image-upload.component').then(m => ImageUploadComponent) }},
      ]
    ;
