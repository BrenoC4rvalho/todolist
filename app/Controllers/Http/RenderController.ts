import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class RendersController {

    async home({ view }: HttpContextContract) {

        let tasks = await Task.all()

        return view.render('home', {
            tasks
        })
        
    } 

}
