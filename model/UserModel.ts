export default interface UserModel {
    uuid: string
    name: string
    email: string
    password: string
    role: string
    image: string
    nip: string
    createdAt: Date
    updatedAt: Date
}