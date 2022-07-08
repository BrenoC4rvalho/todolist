import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'RenderController.home');

Route.group(() => {

  Route.post('/add', 'ApiController.store');
  Route.get('edit/:id', 'ApiController.update');
  Route.get('delete/:id', 'ApiController.destroy');

}).prefix('/api');
