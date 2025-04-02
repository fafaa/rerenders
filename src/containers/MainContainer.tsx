import {memo} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const  MainContainer = (props: any ): JSX.Element  => {
    const user = useSelector((state) => state.user?.user);
    return (
        <>
            {user && <div style={{background: '#afdffc', height: '400px', width: '800px', display: 'flex'}}>
                {props.children}
            </div>}
            {!user && <p> loading... </p>}
        </>
    )
}

//FIXME: this memo is not working - component gets react fragments/htmls as children and
// user object - comparing prev and next props with objects not work, also adding comparing function will not work here
// please note that memo compares passed props not the states
// https://react.dev/reference/react/memo
export default memo(MainContainer);

// //solution:
// const  MainContainer = (props: any ): JSX.Element  => {
// //     FIXME: using user as reference if the data came is no optimal - component rerenders with every change in user object
// //     here is better to add new value to state like isLoading
//     const isLoading = useSelector((state) => state.user.isLoading);
//     return (
//         <>
//             {!isLoading && <div style={{background: '#afdffc', height: '400px', width: '800px', display: 'flex'}}>
//                 {props.children}
//             </div>}
//             {isLoading && <p> loading... </p>}
//         </>
//     )
// }
//
// export default MainContainer;