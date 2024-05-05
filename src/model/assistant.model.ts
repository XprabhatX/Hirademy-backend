import mongoose from "mongoose"
// import 'config/config'

export interface AssistantDocument extends mongoose.Document {
    id: string,
    name: string,
    mobile: string,
    email: string,
    salary: number,
    city: string,
    country: string,
    department: string,
    role: string,
    createdAt: Date,
    updatedAt: Date
}

const assistantSchema = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        mobile: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        salary: {type: Number, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true},
        department: {type: String, required: true},
        role: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const AssistantModel = mongoose.model<AssistantDocument>('Assistant', assistantSchema)

export default AssistantModel