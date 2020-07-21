import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signIn', {
                email: user.email,
                password: user.password,
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signUp', {
            email: user.email,
            password: user.password,
            role: user.role
        });
    }
}

export default new AuthService();