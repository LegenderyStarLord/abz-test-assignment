import api from "../api/api";

const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const REGISTER_NEW_USER = "REGISTER_NEW_USER";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_COUNT_OF_USERS = "SET_COUNT_OF_USERS";
const SET_IS_TABLET = "SET_IS_TABLET";
const SET_IS_MOBILE = "SET_IS_MOBILE";
const SET_POSITIONS = "SET_POSITIONS";

let initialState = {
    users: [],
    positions: [],
    totalUsers: null,
    countOfUsers: null,
    isFetching: false,
    isRegistered: false,
    isTablet: false,
    isMobile: false

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case REGISTER_NEW_USER:
            return {...state, isRegistered: action.registerStatus};

        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers};

        case SET_COUNT_OF_USERS:
            return {...state, countOfUsers: action.countOfUsers};

        case SET_IS_TABLET:
            return  {...state, isTablet: action.isTablet};

        case SET_IS_MOBILE:
            return  {...state, isMobile: action.isMobile};

        case SET_POSITIONS:
            return {...state, positions: action.positions};

        default:
            return state;
    }
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const registerNewUser = (registerStatus) => ({type: REGISTER_NEW_USER, registerStatus});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setCountOfUsers = (countOfUsers) => ({type: SET_COUNT_OF_USERS, countOfUsers});
export const setIsTablet = (isTablet) => ({type: SET_IS_TABLET, isTablet});
export const setIsMobile = (isMobile) => ({type: SET_IS_MOBILE, isMobile});
export const setPositions = (positions) => ({type: SET_POSITIONS, positions});

export const requestUsers = (url) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await api.getUserList(url);
        dispatch(toggleIsFetching(false));
        dispatch(setTotalUsers(response["total_users"]));
        dispatch(setCountOfUsers(response["count"]));
        dispatch(setUsers(response.users));
    }
};

export const requestPositions = (url) => {
    return async (dispatch) => {
        let response = await api.getPositions(url);
        dispatch(setPositions(response.positions));
    }
};


export const newUser = (formData) => {
    return async (dispatch) => {
        const token = await api.getToken();
        let response = await api.addUser(formData, token);
        if(response.data.success) {
            dispatch(requestUsers("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"));
            dispatch(registerNewUser(true));
        }
    }
};

export default usersReducer;

