import React from "react";
import Navigation from "../component/Navigation";
import ChatCard from "../component/ChatCard";
import ChatBox from "../component/ChatBox";

const ChatBoxPages = () => {
    return(
<div class="container mx-auto shadow-lg rounded-lg mt-16">
        <Navigation />
    {/* <!-- Chatting --> */}
    <div class="flex flex-row justify-between bg-white">
      {/* <!-- chat list --> */}
      <div class="flex flex-col w-full border-r-2 overflow-y-auto">
        {/* <!-- search compt --> */}
        <div class="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        {/* <!-- end search compt --> */}
        <ChatBox />
      </div>
      {/* <!-- end chat list --> */}
      {/* <!-- message --> */}
      
      {/* <!-- end message --> */}
      </div>
    </div>
    );
};

export default ChatBoxPages;