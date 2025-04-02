import {useSelector} from 'react-redux';
export function ImgComponent({imgSrc}: {imgSrc?: string}): JSX.Element {

    return (
        <div style={{background: '#4384ab', height: '100px', width: '200px'}}>
            {imgSrc && <img src={imgSrc} height={'100px'}/>}
        </div>
    )
}

// // Solution
// export function ImgComponent(): JSX.Element {
//  // Since App.tsx has been optimised and no longer passes imgSrc we need to get it here
//     const imgSrc = useSelector((state) => state.user?.user?.image || '');
//
//     return (
//         <div style={{background: '#4384ab', height: '100px', width: '200px'}}>
//             {imgSrc && <img src={imgSrc} height={'100px'}/>}
//         </div>
//     )
// }