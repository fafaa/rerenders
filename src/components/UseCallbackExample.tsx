import {useCallback, useMemo} from 'react';
import {User} from "../slices/userSlice.ts";
import {useSelector} from "react-redux";

// The purpose of this component is to demonstrate how useCallback can be used
// someCalculationsFunction should be stored in memory as long as lastName has not changed
// also I assumed user object is required here
export function UseCallbackExample({user}: {user: User}): JSX.Element {
    const lastNameLettersCount = user?.lastName?.length || 0;
    const someCalculations = (num) => {
        console.log('Value of user.firstName: ', user?.lastName);
        console.log("Calculating UseCallbackExample...", num);
        for (let i = 0; i < 100; i++) {
            num += 1;
        }
        return num;
    };

    return (
        <div style={{background: '#059af2', height: '100px', width: '200px'}}>
            {someCalculations(lastNameLettersCount)}
        </div>
    )
}

// // Solution
// export function UseCallbackExample(): JSX.Element {
// // Since we optimized App.tsx we need to get user object here (look for assumptions at the top)
//     const user = useSelector((state) => state.user?.user || {});
//     const lastNameLettersCount = user?.lastName?.length || 0;
//     const someCalculations = useCallback((num) => {
//         console.log('Value of user.firstName: ', user?.lastName);
//         console.log("Calculating UseCallbackExample...", num);
//         for (let i = 0; i < 100; i++) {
//             num += 1;
//         }
//         return num;
// // You can change dependencies array to investigate how chages the value of user.firstName
//     }, [user?.lastName]);
//
//     return (
//         <div style={{background: '#059af2', height: '100px', width: '200px'}}>
//             {someCalculations(lastNameLettersCount)}
//         </div>
//     )
// }

