// import { Anchor, Col, Row } from "antd";
// import { useState } from "react";

// function App() {
//   return (
//     <div className="container mx-auto mt-[100px]">
//       {/* <Row>
//         <Col span={8}>
//           <div className="space-y-2 fixed  overflow-y-auto">
//             {' '}
//             <p className="text-[48px] text-[#e2e8f0] font-bold">
//               Brittany Chiang
//             </p>
//             <p className="text-[20px] text-[#e2e8f0] font-semibold">
//               Senior Frontend Engineer
//             </p>
//             <p className="text-[16px] text-[#94a3b8] ">
//               I build pixel-perfect, engaging, and accessible digital
//               experiences.
//             </p>
//           </div>
//           <Anchor
//             // className="fixed mt-[200px]"
//             items={[
//               {
//                 key: 'part-1',
//                 href: '#part-1',
//                 title: 'Part 1',
//               },
//               {
//                 key: '',
//                 href: '#',
//                 title: 'Part 2',
//               },
//               {
//                 key: 'PROJECTS',
//                 href: '#PROJECTS',
//                 title: 'Part 3',
//               },
//             ]}
//           />
//         </Col>
//         <Col span={16}>
//           <div
//             id="part-1"
//             style={{
//               background: 'rgba(255,0,0,0.02)',
//             }}
//           >
//             <div className="space-y-2 mb-[100px]">
//               {' '}
//               <p className="text-[48px] text-[#e2e8f0] font-bold">
//                 Brittany Chiang
//               </p>
//               <p className="text-[20px] text-[#e2e8f0] font-semibold">
//                 Senior Frontend Engineer
//               </p>
//               <p className="text-[16px] text-[#94a3b8] ">
//                 I build pixel-perfect, engaging, and accessible digital
//                 experiences.
//               </p>
//             </div>
//           </div>
//           <div
//             id=""
//             style={{
//               background: 'rgba(0,255,0,0.02)',
//             }}
//           >
//             <div className="space-y-2 mb-[100px]">
//               {' '}
//               <p className="text-[48px] text-[#e2e8f0] font-bold">
//                 Brittany Chiang
//               </p>
//               <p className="text-[20px] text-[#e2e8f0] font-semibold">
//                 Senior Frontend Engineer
//               </p>
//               <p className="text-[16px] text-[#94a3b8] ">
//                 I build pixel-perfect, engaging, and accessible digital
//                 experiences.
//               </p>
//             </div>
//           </div>
//           <div
//             id="PROJECTS"
//             style={{
//               height: '100vh',
//               background: 'rgba(0,0,255,0.02)',
//             }}
//           >
//             <div className="space-y-2">
//               {' '}
//               <p className="text-[48px] text-[#e2e8f0] font-bold">
//                 Brittany Chiang
//               </p>
//               <p className="text-[20px] text-[#e2e8f0] font-semibold">
//                 Senior Frontend Engineer
//               </p>
//               <p className="text-[16px] text-[#94a3b8] ">
//                 I build pixel-perfect, engaging, and accessible digital
//                 experiences.
//               </p>
//             </div>
//           </div>
//         </Col>
//       </Row> */}
//       {/* <div className="flex mt-[100px]">
//         <div className="w-1/4 h-screen fixed overflow-y-auto">
//           <div className="space-y-2">
//             {' '}
//             <p className="text-[48px] text-[#e2e8f0] font-bold">
//               Brittany Chiang
//             </p>
//             <p className="text-[20px] text-[#e2e8f0] font-semibold">
//               Senior Frontend Engineer
//             </p>
//             <p className="text-[16px] text-[#94a3b8] ">
//               I build pixel-perfect, engaging, and accessible digital
//               experiences.
//             </p>
//           </div>
//         </div>
//         <div className="w-3/4 h-screen  ml-[35%] "></div>
//       </div> */}
//     </div>
//   );
// }

// export default App;

import { Anchor } from 'antd';
import { useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  const [currentActiveLink, setCurrentActiveLink] = useState('#ABOUT');
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const cards = document.getElementsByClassName('card');
  //     for (const card of cards) {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;
  //       card.style.setProperty('--mouse-x', `${x}px`);
  //       card.style.setProperty('--mouse-y', `${y}px`);
  //     }
  //   };

  //   document
  //     .getElementById('cards')
  //     .addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document
  //       .getElementById('cards')
  //       .removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  return (
    <div>
      <div className="container mx-auto max-sm:p-4">
        <nav className=" sticky top-0 text-white header lg:hidden">
          {currentActiveLink.slice(1)}
        </nav>
        <div className="flex flex-col max-lg:justify-center max-lg:items-center lg:mt-[100px]">
          <div className="lg:w-1/4 w-full  lg:h-screen lg:fixed lg:overflow-y-auto">
            <div className="space-y-2">
              {' '}
              <p className="text-[48px] max-sm:text-[35px] text-[#e2e8f0] font-bold">
                Brittany Chiang
              </p>
              <p className="text-[20px] max-sm:text-[18px] text-[#e2e8f0] font-semibold">
                Senior Frontend Engineer
              </p>
              <p className="text-[16px] text-[#94a3b8] ">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
            <div className="mt-[50px] max-lg:hidden">
              <Anchor
                className="text-[#94a3b8]"
                offsetTop={300}
                onChange={(currentActiveLink) => {
                  console.log('currentActiveLink', currentActiveLink);
                  setCurrentActiveLink(currentActiveLink);
                }}
                items={[
                  {
                    key: 'ABOUT',
                    href: '#ABOUT',
                    title: (
                      <div
                        className={`${
                          currentActiveLink == '#ABOUT'
                            ? 'text-[#e2e8f0]'
                            : 'text-[#94a3b8]'
                        }`}
                      >
                        ABOUT
                      </div>
                    ),
                  },
                  {
                    key: 'EXPERIENCE',
                    href: '#EXPERIENCE',
                    title: (
                      <div
                        className={`${
                          currentActiveLink == '#EXPERIENCE'
                            ? 'text-[#e2e8f0]'
                            : 'text-[#94a3b8]'
                        }`}
                      >
                        EXPERIENCE
                      </div>
                    ),
                  },
                  {
                    key: 'PROJECTS',
                    href: '#PROJECTS',
                    title: (
                      <div
                        className={`${
                          currentActiveLink == '#PROJECTS'
                            ? 'text-[#e2e8f0]'
                            : 'text-[#94a3b8]'
                        }`}
                      >
                        PROJECTS
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <div className="lg:w-3/4 w-full lg:h-screen  lg:ml-[35%] ">
            <div
              id="ABOUT"
              style={
                {
                  // height: "100vh",
                  // background: 'rgba(0,255,0,0.02)',
                }
              }
            >
              <About />
            </div>
            <div
              id="EXPERIENCE"
              style={
                {
                  // height: '100vh',
                  // background: 'rgba(0,255,0,0.02)',
                }
              }
            >
              <Experience />
            </div>
            <div
              id="PROJECTS"
              style={{
                height: '100vh',
                background: 'rgba(0,0,255,0.02)',
              }}
            >
              <Project />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
