// import VideoCard from "../components/VideoCard";
// import { useState } from "react";
// import { Data } from "../constants";

// const VideoGallery = () => {
//   const [activeVid, setActiveVid] = useState(
//     "https://www.youtube.com/embed/vE39_togVdE?si=HcVv6SYlF085aUew"
//   );
//   const [actTitle, setActTitle] = useState("PDA AFRICA");
//   const [description, setActiveDescription] = useState(
//     "Introduction of the VSLA/GALS Program"
//   );
//   const arr = Data;

//   return (
//     <div className="flex flex-row w-full h-full pt-2">
//       <VideoCard link={activeVid} title={actTitle} description={description} />
//       <div
//         className="w-3/6 shadow-lg shadow-gray-600 overflow-y-scroll flex flex-col mt-4 mr-20 border-slate-200 border-2 rounded-lg h-[500px]"
//         // style={{ height: "min(38vw, 650px)" }}
//       >
//         <h3 className="text-2xl p-2 font-semibold">PDA AFRICA</h3>
//         <p className="px-2"> Videos</p>
//         {arr.map((e) => {
//           return (
//             <div
//               className="hover:bg-gray-300 p-2 border-2 rounded-xl h-full shadow-xl shadow-gray-300"
//               onClick={() => {
//                 setActiveVid(e.link);
//                 setActTitle(e.title);
//                 setActiveDescription(e.description);
//               }}
//             >
//               <img className="w-1/2 h-20 my-4 mx-2 float-left" src={e.img} />
//               <p className="ml-2 font-semibold pt-6 pl-8 text-sm">{e.title}</p>
//               <p className="px-2">{e.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

// import { useState, useEffect } from "react";
// import Tab from "../components/Tab";

// const VideoGallery = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null); // New state to track errors

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const channelId = "UC_SePgsyHh7YvekBLSv4XZA";
//       // const apiKey = "AIzaSyB8v-m8cwvsQsP96sBsRHil0ISvvWiNQec";
//       const apiKey = "AIzaSyC5Nq4obpTnl5EXT96phk5ATyw0v1fEMiM";
//       const maxResults = 4; // Number of videos to fetch

//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
//         );
//         const data = await response.json();
//         if (data.items) {
//           setVideos(data.items);
//         } else {
//           setError("No videos found.");
//         }
//       } catch (error) {
//         console.error("Error fetching YouTube videos:", error);
//         setError("Failed to fetch videos.");
//       }
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <section
//       id="gallery"
//       className="flex max-container justify-center lg:mx-20  max-sm:mx-5"
//     >
//       <div className=" bg-white w-full justify-center">
//         <div className=" flex justify-between ml-10 max-sm:ml-0 max-sm:gap-7 ">
//           <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
//             Videos
//           </h3>

//           <a href="https://www.youtube.com/@official_pdatv/playlists">
//             <Tab label="MORE VIDEOS" />
//           </a>
//         </div>
//         <div className="flex flex-row gap-3 justify-center mt-10 flex-wrap ">
//           {videos.map((video) => (
//             <iframe
//               key={video.id.videoId}
//               width="320"
//               height="250"
//               src={`https://www.youtube.com/embed/${video.id.videoId}`}
//               title={video.snippet.title}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoGallery;

import React from "react";
import Tab from "../components/Tab";

const VideoGallery = () => {
  // Define an array of video objects with their IDs and titles
  const videos = [
    { id: "61QUHKQ4ECc", title: "Video 1" },
    { id: "6VhatIeDRpo", title: "Video 2" },
    { id: "5r9aOmU0mWI", title: "Video 3" },
  ];

  return (
    <section
      id="gallery"
      className="flex max-container justify-center max-sm:mx-5"
    >
      <div className="bg-white w-full justify-center">
        <div className="flex justify-between mx-20 max-sm:ml-0 max-sm:gap-7">
          <h3 className="font-poppins font-bold text-3xl text-ash pb-4">
            Videos
          </h3>
          <a
            href="https://www.youtube.com/@official_pdatv/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tab label="MORE VIDEOS" />
          </a>
        </div>
        <div className="flex flex-row justify-center gap-3 mt-10 flex-wrap">
          {videos.map((video) => (
            <iframe
              key={video.id}
              width="370"
              height="250"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
