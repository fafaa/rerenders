import {useMemo, useCallback} from 'react';
import {useSelector} from "react-redux";
import {User} from "../slices/userSlice.ts";

// The purpose of this component is to generate something what takes a lot of time
// I assumed id cannot be changed so this component should calculate only once and store the value in memory
// also I assumed user object is required here
export function ExpensiveAndLongCalculation({user}: {user: User}): JSX.Element {
    const idLettersCount = user?.id?.length;
    const expensiveCalculation = (num) => {
        console.log("Calculating RandomGeneratorComponent...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const calculation = expensiveCalculation(idLettersCount);

    return (
        <div style={{background: '#4384ab', height: '100px', width: '200px'}}>
            {calculation}
        </div>
    )
}

// // Solution
// // FIXME: The only thing which can be optimized here is the calculation, rerenders will stay untouched since user object is required
// export function ExpensiveAndLongCalculation(): JSX.Element {
//     const user = useSelector((state) => state.user?.user || {});
//     const expensiveCalculation =(num) => {
//         console.log("Calculating RandomGeneratorComponent...");
//         for (let i = 0; i < 1000000000; i++) {
//             num += 1;
//         }
//         return num;
//     };
//
//     const idLettersCount = user?.id?.length || 0;
// // component rerenders but doesn't make expensive calculations as along as user.id is not changed (so in our case - never)
// // useMemo stores the result value in memory
//     const calculation = useMemo(() => expensiveCalculation(idLettersCount), [user?.id]);
//
//     return (
//         <div style={{background: '#0675b7', height: '100px', width: '200px'}}>
//             {calculation}
//         </div>
//     )
// }
