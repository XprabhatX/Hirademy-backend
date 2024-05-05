import { Express, Request, Response } from 'express'
import { createAssistantHandler, deleteAssistantHandler, getAllAssistantHandler, getAssistantHandler, updateAssistantHandler } from '../controllers/assistant.controller.js'
import validateResource from '../middleware/validateResource.js'
import { createAssistantSchema } from '../schema/assistant.schema.js'

function routes(app: Express) {
    // app.get('/assistant', getAllAssistantHandler)

    // CREATE
    app.post('/assistant', validateResource(createAssistantSchema), createAssistantHandler)
    
    // READ
    app.get('/assistant/:id', getAssistantHandler)

    // UPDATE
    app.put('/assistant/:id', updateAssistantHandler)

    // DELETE
    app.delete('/assistant/:id', deleteAssistantHandler)
}

export default routes