import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePostCard from "../component/ProfilePostCard";

// icons
import { FaVideo, FaCamera } from "react-icons/fa6";
import Navigation from "../component/Navigation";
import { FakeUsers } from "../constants/fakeData";

const Profile = () => {
  const navigate = useNavigate();

  const [posts, setposts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setposts(FakeUsers);
    };
    getData();
  }, []);

 

  return (
    <div>
      <Navigation />
      <div className="mt-16 min-h-screen">

          <main className="bg-gray-100 bg-opacity-25">
            <div className="lg:max-w-5xl lg:mx-auto mb-8">
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                {/* profile image */}
                <div className="relative group w-20 h-20 md:w-40 md:h-40 object-cover overflow-hidden rounded-full">
                  <LazyLoadImage
                    className="rounded-full h-full w-full border-2 border-pink-600 md:p-1 p-0.5"
                    src="https://parkridgevet.com.au/wp-content/uploads/2020/11/Profile-300x300.png"
                    alt="Full Name"
                  />
                </div>
              </div>
              {/* profile meta */}
              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center">
                  <div>
                    <h2 className="hidden sm:md:block font-bold inline-block md:mr-2 sm:mb-0">
                      John Deluxe
                    </h2>
                    {/* user meta form medium screens */}
                    <div className="hidden md:block">
                      <h1 className="font-semibold">Pasraman: Bali</h1>
                      <p className="font-normal text-sm text-gray-600">Organisasi</p>
                      <p>Sekolah</p>
                    </div>
                  </div>
                </div>
                {/* user meta form small screens */}
                <div className="md:hidden text-sm my-2">
                  <h1 className="font-semibold">John Deluxe</h1>
                  <h2 className="font-semibold">Pasraman: Bali</h2>
                      <p className="font-normal text-sm text-gray-600">Organisasi</p>
                      <p>Sekolah</p>
                </div>
              </div>
            </header>

              {/* posts */}
              <div className="px-px md:px-3">
                {/* mobile only */}
                <ul
                  className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
                >
                  <li>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group" >
                     <FaCamera className="w-7 h-7 mb-1 text-black group-hover:text-blue-600 font-bold p-1"/>
                    </button>
                  </li>
                  <li>
                  <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group" >
                     <FaVideo className="w-7 h-7 mb-1 text-black group-hover:text-blue-600 font-bold p-1"/>
                    </button>
                  </li>
                </ul>
                {/* flexbox grid */}
                {/* {posts?.length === 0 && (
                  <div className="flex items-center justify-center h-screen">
                    <div className="text-center">No posts yet</div>
                  </div>
                )} */}
                <motion.div
                  layout
                  className="grid grid-cols-3 md:gap-8 gap-1 md:p-2 p-1"
                >
                  {posts?.reverse().map((post, index) => (
                    <ProfilePostCard key={index} post={post} />
                  ))}
                </motion.div>
              </div>
            </div>
          </main>
        {/* {isLoading && (
          <>
            <Loading />
          </>
        )} */}
        {/* {noUser && (
          <div className="py-56 w-full flex items-center justify-center p-3">
            <NotFound />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
