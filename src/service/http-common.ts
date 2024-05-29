import axios from "axios";


export default axios.create({
    baseURL: `${process.env.NEXT_AUTHENTICATION_BACKEND_HOST}`,
    headers: {
        "Content-type": "application/json"
    }
});
