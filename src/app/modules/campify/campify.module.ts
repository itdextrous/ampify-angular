import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampifyComponent } from './campify.component';
import { MenuComponent } from './components/menu/menu.component';
import { CampifyRoutingModule } from './campify-routing.module';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { SharedModule } from './../../shared/shared.module';
import { LocationComponent } from './pages/location/location.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SchedulesComponent } from './pages/schedules/schedules.component'


@NgModule({
  declarations: [CampifyComponent, MenuComponent, ConfigurationComponent, LocationComponent, ActivitiesComponent, GroupsComponent, RequirementsComponent, SchedulesComponent],
  entryComponents: [
    CampifyComponent
  ],
  imports: [
    CommonModule,
    CampifyRoutingModule,
    SharedModule
  ]
})
export class CampifyModule { }
