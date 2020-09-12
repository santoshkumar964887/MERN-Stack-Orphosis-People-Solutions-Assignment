import  axois from 'axios';
const instance= axois.create({
    baseURL:"http://localhost:9000/api/v1/user"
});
export default instance;