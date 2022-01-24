import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { LocationComponent } from './pages/location/location.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'location', component: LocationComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'schedules', component: SchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampifyRoutingModule { }
