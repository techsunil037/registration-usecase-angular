import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path:'',
        redirectTo: 'registration',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
