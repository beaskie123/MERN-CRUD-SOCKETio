import bcrypt from 'bcryptjs'
const data = {
    users : [
        {
            name: 'Bea',
            email: 'bea@example.com',
            password: bcrypt.hashSync('Bea@123'),
        },
        {
            name: 'Peter',
            email: 'peter@example.com',
            password: bcrypt.hashSync('Peter@123'),
        }
    ]
}

export default data