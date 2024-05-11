import { Anchor, Col, Row } from 'antd';
import { useState } from 'react';

function App() {
  return (
    <div className="container mx-auto mt-[100px]">
      <Row>
        <Col span={8}>
          <div className="space-y-2 fixed  overflow-y-auto">
            {' '}
            <p className="text-[48px] text-[#e2e8f0] font-bold">
              Brittany Chiang
            </p>
            <p className="text-[20px] text-[#e2e8f0] font-semibold">
              Senior Frontend Engineer
            </p>
            <p className="text-[16px] text-[#94a3b8] ">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
          </div>
          <Anchor
            // className="fixed mt-[200px]"
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </Col>
        <Col span={16}>
          <div
            id="part-1"
            style={{
              background: 'rgba(255,0,0,0.02)',
            }}
          >
            <div className="space-y-2 mb-[100px]">
              {' '}
              <p className="text-[48px] text-[#e2e8f0] font-bold">
                Brittany Chiang
              </p>
              <p className="text-[20px] text-[#e2e8f0] font-semibold">
                Senior Frontend Engineer
              </p>
              <p className="text-[16px] text-[#94a3b8] ">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
          </div>
          <div
            id="part-2"
            style={{
              background: 'rgba(0,255,0,0.02)',
            }}
          >
            <div className="space-y-2 mb-[100px]">
              {' '}
              <p className="text-[48px] text-[#e2e8f0] font-bold">
                Brittany Chiang
              </p>
              <p className="text-[20px] text-[#e2e8f0] font-semibold">
                Senior Frontend Engineer
              </p>
              <p className="text-[16px] text-[#94a3b8] ">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
          </div>
          <div
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
            }}
          >
            <div className="space-y-2">
              {' '}
              <p className="text-[48px] text-[#e2e8f0] font-bold">
                Brittany Chiang
              </p>
              <p className="text-[20px] text-[#e2e8f0] font-semibold">
                Senior Frontend Engineer
              </p>
              <p className="text-[16px] text-[#94a3b8] ">
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div className="flex mt-[100px]">
        <div className="w-1/4 h-screen fixed overflow-y-auto">
          <div className="space-y-2">
            {' '}
            <p className="text-[48px] text-[#e2e8f0] font-bold">
              Brittany Chiang
            </p>
            <p className="text-[20px] text-[#e2e8f0] font-semibold">
              Senior Frontend Engineer
            </p>
            <p className="text-[16px] text-[#94a3b8] ">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
          </div>
        </div>
        <div className="w-3/4 h-screen  ml-[35%] "></div>
      </div> */}
    </div>
  );
}

export default App;
