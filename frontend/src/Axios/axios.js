import axios from "axios"
const instance = axios.create({
    baseURL:"https://delightful-bracelet-hare.cyclic.app/api"
})
export default instance