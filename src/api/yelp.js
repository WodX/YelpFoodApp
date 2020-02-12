import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cUlCz6fzg4gEWOyMvruOcxG9Tb_MHVQbrDLdJ4bYJIayH9d2xKueAJC2M1eLmEPf8hVLP_d1I1Q17927qjAxsVOI-o4VvLUN9Vhqv8jn-hGHE9MjjgRh32QRHvA3XnYx',
    }
});