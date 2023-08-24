import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9944e1ddf09144e099a3c5d690933fca'
    }
})