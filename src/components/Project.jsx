import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
export default function Project() {
  return (
    <div className="lg:space-y-16 max-sm:space-y-8 mt-[100px]">
      <div className="text-white lg:hidden">PROJECTS</div>
      <div className="flex max-md:flex-col md:p-5 max-md:p-2 max-lg:gap-5 hover:bg-[rgba(51,70,102,0.5)] hover:rounded-md transition duration-300 delay-150 ease-in ">
        <div className="text-[16px] text-[#94a3b8] basis-4/12 mt-1 mr-3 ">
          <div className="w-[200px]">
            <img src="/course-card.png" alt="" />
          </div>
        </div>
        <div className="space-y-3 basis-11/12">
          <p className="text-[20px] text-[#e2e8f0] hover:text-[#3d9e89] font-semibold ">
            Build a Spotify Connected App{' '}
            <span className="cursor-pointer hover:animate-bounce">
              <LinkOutlined />
            </span>
          </p>
          <p className="text-[16px] text-[#94a3b8] font-medium">
            Video course that teaches how to build a web app with the Spotify
            Web API. Topics covered include the principles of REST APIs, user
            auth flows, Node, Express, React, Styled Components, and more. Build
            a Spotify Connected App Newline course marketing card Spotify
            Profile Web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <div className="flex gap-4 flex-wrap">
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              JavaScript
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              TypeScript
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              React
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              Storybook
            </span>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col md:p-5 max-md:p-2 max-lg:gap-5 hover:bg-[rgba(51,70,102,0.5)] hover:rounded-md transition duration-300 delay-150 ease-in ">
        <div className="text-[16px] text-[#94a3b8] basis-4/12 mt-1 mr-3">
          <div className="w-[200px]">
            <img src="/spotify-profile.png" alt="" />
          </div>
        </div>
        <div className="space-y-3 basis-11/12">
          <p className="text-[20px] text-[#e2e8f0] hover:text-[#3d9e89] font-semibold ">
            Build a Spotify Connected App{' '}
            <span className="cursor-pointer hover:animate-bounce">
              <LinkOutlined />
            </span>
          </p>
          <p className="text-[16px] text-[#94a3b8] font-medium">
            Video course that teaches how to build a web app with the Spotify
            Web API. Topics covered include the principles of REST APIs, user
            auth flows, Node, Express, React, Styled Components, and more. Build
            a Spotify Connected App Newline course marketing card Spotify
            Profile Web app for visualizing personalized Spotify data. View your
            top artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <div className="flex gap-4 flex-wrap">
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              JavaScript
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              TypeScript
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              React
            </span>
            <span className="border rounded-full  py-1 px-4 text-center text-[#5eead4] font-medium ">
              Storybook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
