import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class ApiController {
    
    async store({ request, response }: HttpContextContract) {

        const data = request.only(['task'])
        await Task.create(data);

        response.redirect('/');

    }

    async update({ response, params }: HttpContextContract) {
        
        const { id } = params;
        const task = await Task.find(id);
        const data = {
            'done': task?.done ? false : true
        }  

        task?.merge(data)
        await task?.save();
        
        response.redirect('/');
        
    }

   async destroy({ params, response }: HttpContextContract) {
    
        const { id } = params;

        const task = await Task.find(id);
        await task?.delete();

        response.redirect('/');
    
    }

}
