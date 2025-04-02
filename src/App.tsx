import React from 'react';
import {setInitialState} from "./slices/userSlice.ts";
import {useDispatch, useSelector} from 'react-redux';
import './App.css'
import MainContainer from "./containers/MainContainer.tsx";
import StringContainer from "./containers/StringContainer.tsx";
import {ImgComponent} from "./components/ImgComponent.tsx";
import {UseCallbackExample} from "./components/UseCallbackExample.tsx";
import {ExpensiveAndLongCalculation} from "./components/ExpensiveAndLongCalculation.tsx";

function App() {
    const dispatch = useDispatch();

    //FIXME: bad practice - this will rerender all components with every change in user object
    const user = useSelector((state) => state.user.user);
    React.useEffect(
        () => {
            let timer1 = setTimeout(() => {
                dispatch(setInitialState());
            }, 3000);
            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );

    return (
        <>
            <MainContainer>
                <StringContainer type='firstName'/>
                <StringContainer type='lastName'/>
                <ImgComponent imgSrc={user?.image}/>
                <ExpensiveAndLongCalculation user={user}/>
                <UseCallbackExample user={user}/>
            </MainContainer>
        </>
    )
}

export default App
