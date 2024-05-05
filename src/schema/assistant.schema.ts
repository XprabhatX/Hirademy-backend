import { object, string, number, TypeOf } from 'zod'

export const createAssistantSchema = object({
    body: object({
        id: string({
            required_error: 'id is required'
        }),
        name: string({
            required_error: 'name is required'
        }).min(2, "Name too short - 2 characters minimum"),
        mobile: string({
            required_error: 'mobile number is required'
        }).min(10, 'mobile number too short - 10 digits minimum'),
        email: string({
            required_error: 'email is required'
        }).email('email is invalid'),
        salary: number({
            required_error: 'salary is required'
        }),
        city: string({
            required_error: 'city is required'
        }),
        country: string({
            required_error: 'country is required'
        }),
        department: string({
            required_error: 'department is required'
        }),
        role: string({
            required_error: 'role is required'
        })
    })
})

export type CreateAssistantInput = TypeOf<typeof createAssistantSchema>