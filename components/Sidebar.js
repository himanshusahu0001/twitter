import { FiMoreHorizontal } from "react-icons/fi";
import { VscTwitter } from "react-icons/vsc";
import SidebarOption from "./SidebarOption";
import { useState } from "react";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill, RiEyeFill } from "react-icons/ri";
import { BiBookBookmark, BiHash, BiListCheck } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import {BsBookmark, BsBookmarkFill, BsPerson, BsPersonFill } from "react-icons/bs";
import Link from 'next/link';

const style = {
  wrapper: "flex-[0.7] px-8 flex flex-col",
  twitterIconContainer: "text-3xl m-4",
  tweenButton:
    "bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer",
  navContainer: "flex-1",
  profileButton:
    "flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2",
  profileLeft: "flex items-center justify-center mr-4",
  profileImage: "height-12 w-12 rounded-full",
  profileRight: "flex-1 flex",
  details: "flex-1",
  name: "text-lg",
  handle: "text-[#8899a6]",
  moreContainer: "flex items-center mr-2",
};

function Sidebar({ initialSelectedIcon = "Home" }) {
  const [selected, setSelected] = useState(initialSelectedIcon);
  return (
    <div className={style.wrapper} >
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={selected === "Home"}
          setSelected={setSelected}
          redirect={"/"}
        />

        <SidebarOption
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          text="Explore"
          isActive={selected === "Explore"}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Notifications" ? FaBell : FiBell}
          text="Notifications"
          isActive={selected === "Notifications"}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={selected === "Messages"}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={selected === "Bookmarks"}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "List" ? RiFileList2Fill : FaRegListAlt}
          text="List"
          isActive={selected === "List"}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={selected === "Profile"}
          setSelected={setSelected}
          redirect={'/profile'}
        />

        <SidebarOption
          Icon ={ CgMoreO} 
          text="More"
          isActive={selected === "More"}
          setSelected={setSelected}
        />



        <div className={style.tweenButton}>Mint</div>
      </div>

      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}> Happy123 </div>
            <div className={style.handle}> @0x22df...23fsdfsd </div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
