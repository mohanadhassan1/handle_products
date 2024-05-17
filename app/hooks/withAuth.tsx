// 'use client'

// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import { useEffect} form 'react';

// const withAuth = (wrapComponent) => {
//     const Wrapper = (props) => {
//         const router = useRouter()
//         const currentUser = useSelector((state) => state.user.currentUser)

//         useEffect(() = {
//             if(!currentUser){
//                 router.push("/login")
//             }
//         }, [currentUser, router])


//         return currentUser ? <wrapComponent {...props}/> : null; 
//     };

//     return Wrapper;
// }

// export default withAuth;