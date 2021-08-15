import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MyPlaylistScreenComponent } from './my-playlist-screen/my-playlist-screen.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {path:"home", component:HomeScreenComponent},
  {path:"playlist", component:MyPlaylistScreenComponent},
  {path:"**", component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
