import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '/hydrate',
    renderMode: RenderMode.Client,
  },
  {
    path: '/hydrate/:id',
    renderMode: RenderMode.Prerender,
    /*async getPrerenderParams() {
      const dataService = inject(ProductService);
      const ids = await dataService.getIds(); // ["1", "2", "3"]
      return ids.map(id => ({id}))
    }*/
  },
];
