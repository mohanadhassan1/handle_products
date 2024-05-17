import Product from "./product/page"

export default function Home() {

  return (
    <main className="container flex min-h-screen flex-col items-center p-8">
      <Product />
    </main>
  );
}

// export default withAuth(Home);


// 'use client'
// // Home.tsx
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { login, logout } from '../store/authSlice';
// import Product from './product/page'; 
// import { useRouter } from 'next/navigation';

// // const Home: React.FC = () => {
// export default function Home() {

//   const dispatch = useDispatch();
//   const router = useRouter();
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   const handleLogin = () => {
//     dispatch(login());
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   React.useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, router]);

//   return (
//     <div>
//       {isAuthenticated ? (
//         <>
//           <button onClick={handleLogout}>Logout</button>
//           <Product />
//         </>
//       ) : (
//         <button onClick={handleLogin}>Login</button>
//       )}
//     </div>
//   );
// };

// // export default Home;

