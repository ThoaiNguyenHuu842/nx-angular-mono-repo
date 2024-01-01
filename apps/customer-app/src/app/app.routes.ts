import { Route } from '@angular/router';
export const appRoutes: Route[] = [
    {
        path: 'product-detail',
        loadComponent: () =>
          import('@nx-angular-mono-repo/product').then((m) => m.ProductComponent),
    },
];
