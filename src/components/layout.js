// /** @jsx jsx */
// import React from 'react';
// // import dynamic from 'next/dynamic';
// import { jsx, Flex } from 'theme-ui';
// // import Footer from './footer/footer';
// // import ChatApp from './chat-app';

import { Flex } from "theme-ui";
import Footer from "./footer/footer";
import Header from "./header/header";
import TopHeader from "./header/top-header";

// // const Header = dynamic(() => import('./header/header'), { ssr: false });

// export default function Layout({ children }) {
//   return (
//     <Flex
//       sx={{
//         minHeight: '100vh',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       <Header />
//       <main
//         // sx={{
//         //   variant: 'layout.main',
//         // }}
//       >
//         {children}
//       </main>
//       <ChatApp />
//       <Footer />
//     </Flex>
//   );
// }

export default function Layout({ children }) {
    return (
        <>
            <Flex
                sx={{
                    minHeight: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // background: "pink"
                }}
            >
                <TopHeader />
                <Header />
                <main
                // sx={{
                //     variant: 'layout.main',
                // }}
                >
                    {children}
                </main>
                <Footer />
            </Flex>
        </>
    )
}
