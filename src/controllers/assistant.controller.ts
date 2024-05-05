import { Request, Response } from "express"
import mongoose from "mongoose"
import { createAssistant, deleteAssistant, getAllAssistant, getAssistant, updateAssistant } from "../service/assistant.service.js"
import { CreateAssistantInput } from "../schema/assistant.schema.js"

export async function createAssistantHandler(req: Request<{}, {}, CreateAssistantInput['body']>, res: Response) {
    try {
        const user = await createAssistant(req.body)
        res.send(user.id)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function getAllAssistantHandler(req: Request, res: Response) {
    try {
        const allAssistant = await getAllAssistant()
        res.json(allAssistant)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function getAssistantHandler(req: Request, res: Response) {
    try {
        const assistant = await getAssistant(req.params.id)
        res.json(assistant)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function updateAssistantHandler(req: Request, res: Response) {
    try {
        const id = req.params.id
        const newBody = req.body
        updateAssistant(id, newBody)
        res.send('Successfully updated assistant id: ' + id)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}

export async function deleteAssistantHandler(req: Request, res: Response) {
    try {
        const id = req.params.id
        deleteAssistant(id)
        res.send('Successfully deleted assistant id: ' + id)
    } catch (e: any) {
        return res.status(409).send(e.message)
    }
}