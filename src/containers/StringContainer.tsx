import {setUserData, User} from '../slices/userSlice';
import {memo} from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function StringContainer({type}: {type: string}): JSX.Element {
    const dispatch = useDispatch();

    // this component will rerender with every change in user object
    const user = useSelector((state) => state.user?.user || {});
    return (
        <div style={{background: '#3db6ff', height: '100px', width: '200px'}}>
            <input value={user[type] || ''}
                   onChange={(event) => dispatch(setUserData({[type]: event.target.value} as Partial<User>))}
            />
        </div>
    )
}

// // Solution
// const StringContainer = ({type}: {type: string}): React.JSX.Element =>  {
//     const dispatch = useDispatch();
//
// //     FIXME: It is better to get precise interesting data than the entire object
//     const name = useSelector((state) => state.user?.user?.[type] || '');
//     return (
//         <div style={{background: '#3db6ff', height: '100px', width: '200px'}}>
//             <input value={name || ''}
//                    onChange={(event) => dispatch(setUserData({[type]: event.target.value}))}
//             />
//         </div>
//     )
// }
//
// // FIXME: probably using memo will not be a change maker but because type and name are primitive types we can use it
// export default memo(StringContainer);