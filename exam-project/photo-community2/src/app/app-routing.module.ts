import { RouterModule, Routes } from "@angular/router";
import { BazarPageComponent } from "./feature/bazar/bazar-page/bazar-page.component";
import { BazarModule } from "./feature/bazar/bazar.module";
import { HomePageComponent } from "./feature/pages/home-page/home-page.component";
import { PageNotFoundPageComponent } from "./feature/pages/page-not-found-page/page-not-found-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'user',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'photos',
        loadChildren: () => import('./feature/photos/photos.module').then(m => m.PhotosModule)
    },
    {
        path: 'bazar',
        component: BazarPageComponent
    },
    {
        path: '**',
        component: PageNotFoundPageComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);