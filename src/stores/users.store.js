import { atom, selector } from "recoil";
import usersService  from '../services/usersService'

const user = {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    image: ''
}

const userState = atom({
    key: 'userState',
    user: user,
    isLoading: true
})

const createUser = selector({
    key: 'CreateUser',
    get: ({get}) => {
        const users = get(userState)

        usersService.create()
    }
})