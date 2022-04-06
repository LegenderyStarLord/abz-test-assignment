import React, {useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {requestUsers, setIsMobile, setIsTablet} from "../../redux/users-reducer";
import useWindowDimensions from "../Hooks/useWindowDimensions";


function UsersContainer(props) {
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if(props.isTablet) {
            props.requestUsers("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=4");
        } else if(props.isMobile) {
            props.requestUsers("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=3");
        } else {
            props.requestUsers("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");
        }
    },[props.isTablet]);

    useEffect(() => {

        if(width < 1000 && width > 380) {
            props.setIsTablet(true)
            props.setIsMobile(false)
        } else if(width < 380) {
            props.setIsTablet(false)
            props.setIsMobile(true)
        } else if(width > 1000) {
            props.setIsTablet(false)
            props.setIsMobile(false)
        }
    },[width]);


    return (
        <>
        <Users usersList={props.usersList}
               getMoreUsers={props.requestUsers}
               totalUsers={props.totalUsers}
               countOfUsers={props.countOfUsers}
               isFetching={props.isFetching}
               isTablet={props.isTablet}
        />
        </>
    );
}


let mapStateToProps = (state) => {
    return {
        usersList: state.usersBlock.users,
        isFetching: state.usersBlock.isFetching,
        totalUsers: state.usersBlock.totalUsers,
        countOfUsers: state.usersBlock.countOfUsers,
        isTablet: state.usersBlock.isTablet,
        isMobile: state.usersBlock.isMobile
    }
};



export default connect(mapStateToProps, {requestUsers, setIsTablet, setIsMobile})(UsersContainer);