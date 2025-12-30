
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destination/:id', component: DestinationDetailComponent }
];
