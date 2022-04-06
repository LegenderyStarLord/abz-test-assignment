import React from 'react';
import './Users.scss'
import photoCover from '../../assets/Photo-cover.svg'
import Preloader from "../common/preloader/Preloader";

let Users = (props) => {

    function formatPhoneNumber(phoneNumberString) {
        let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        let match = cleaned.match(/^(38|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            let intlCode = (match[1] ? '+38 ' : '');
            return [intlCode, '(', match[2], ') ', match[3], ' ', match[4], '-', match[5]].join('');
        }
        return null;
    }


    const showMoreUsers = () => {
        let count = props.usersList.length + (props.isTablet ? 4 : 3);
        props.getMoreUsers(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`);
    }

    return (
        <div className={"users-block-wrapper"}>
        <div className={"main-block"}>
            <h2>Our cheerful users</h2>
            <h3>The best specialists are shown below</h3>
            {props.isFetching ? <Preloader/> :
                <div className={"users-cards-block"}>
                    {props.usersList?.map((user) => {
                        let formattedPhoneNumber = formatPhoneNumber(user.phone);
                        return (
                            <div key={user.id} className={"block"}>
                                <img className={"userPhoto"}
                                     src={user.photo.substr(user.photo.length - 3) != "png" || null ? user.photo : photoCover}
                                     alt={"userPhoto"}/>
                                <div className={"wrapper"}>
                                    <h4 className={user.name.length >= 34 ? "userName overflow" : "userName"}
                                        data-tooltip={user.name}>{user.name}</h4>
                                </div>
                                <p>{user.position}</p>
                                <div className={"wrapper"}>
                                    <p className={user.email.length >= 29 ? "overflow" : null}
                                       data-tooltip={user.email}>{user.email}</p>
                                </div>
                                <p>{formattedPhoneNumber}</p>
                            </div>
                        )
                    })}
                </div>
            }
            <button className={props.countOfUsers >= props.totalUsers ? "hide-show-more-btn" : "show-more-btn"}
                    onClick={showMoreUsers}>Show more
            </button>
        </div>
        </div>
    );
}

export default Users;