import React, {useEffect} from "react";
import Registration from "./Registration";
import {connect} from "react-redux";
import {newUser, requestPositions} from "../../redux/users-reducer";

function RegistrationContainer(props) {

    useEffect(() => {
        props.requestPositions("https://frontend-test-assignment-api.abz.agency/api/v1/positions");
    });

    return (
        <>
            <Registration registerNewUser={props.newUser}
                          isRegistered={props.isRegistered}
                          positions={props.positions}
            />
        </>
    );
}


let mapStateToProps = (state) => {
    return {
        isRegistered: state.usersBlock.isRegistered,
        positions: state.usersBlock.positions
    }
};

export default connect(mapStateToProps, {newUser, requestPositions})(RegistrationContainer);

