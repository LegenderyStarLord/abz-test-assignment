import axios from "axios";

const getUserList = async url => {
    try {
        const response = await axios.get(url);
        if (response.data.success) {
            return response.data;
        }
    } catch (error) {
        console.log('getUserList api error: ', error);
    }
};

const getPositions = async url => {
    try {
        const response = await axios.get(url);
        if (response.data.success) {
            return response.data;
        }
    } catch (error) {
        console.log('getPositions: ', error);
    }
};

const getToken = async () => {
    try {
        const response = await axios.get(
            'https://frontend-test-assignment-api.abz.agency/api/v1/token',
        );
        if (response.data.success) {
            return response.data.token;
        }
    } catch (error) {
        console.log('getToken api error: ', error);
    }
};


const addUser = async (data, token) => {
    try {
        const formData = new FormData();
        formData.append('position_id', data.position);
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('photo', data.picture[0]);
        const response = await axios({
            method: 'post',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            data: formData,
            headers: {
                token: token,
            },
        });
        if (response.data.success) {
            return response;
        }
    } catch (error) {
        console.log('addUser api error: ', error);
        return error.response;
    }
};

export default { getToken, addUser, getUserList, getPositions };