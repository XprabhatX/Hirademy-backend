import {ObtainDocumentType} from 'mongoose'
import AssistantModel, {AssistantDocument} from '../model/assistant.model.js'


export async function createAssistant(input: ObtainDocumentType<Omit<AssistantDocument, 'createdAt' | 'updatedAt'>>) {
    try {
        return await AssistantModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllAssistant() {
    try {
        return await AssistantModel.find({})
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAssistant(aid: string) {
    try {
        return await AssistantModel.findOne({ id: aid })
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function updateAssistant(aid: string, newBody: AssistantDocument) {
    try {
        await AssistantModel.findOneAndUpdate({ id: aid }, newBody)
        return
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function deleteAssistant(aid: string) {
    try {
        await AssistantModel.findOneAndDelete({id: aid})
        return
    } catch(e: any) {
        throw new Error(e)
    }
}