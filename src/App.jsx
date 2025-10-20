import { useState } from "react";

function Hobbies() {
  return (
    <div className="text-white space-y-2">
      <div>Playing the Bass</div>
      <div>Making music on my laptop</div>
      <div>Writing novels</div>
    </div>
  );
}

function Interests() {
  return (
    <div className="text-white space-y-2">
      <div>Devops and System Administration</div>
      <div>Military History</div>
      <div>Ships, airplanes, tanks, cars, and jets</div>
    </div>
  );
}

function Skills() {
  return (
    <div className="text-white space-y-2">
      <div>Vue</div>
      <div>Flask</div>
      <div>Nginx, Docker</div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hobbies");

  const renderSection = () => {
    switch (activeSection) {
      case "hobbies":
        return <Hobbies />;
      case "interests":
        return <Interests />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  return (
    <div className="h-[100dvh] w-full bg-black flex overflow-hidden">
      <div className="h-full w-[70%] p-15 bg-slate-700 text-white p-10">
        <div className="font-bold text-7xl mb-4">Juan Karlo T. Alano</div>
        <div className="mb-8">
          Just a computer science student making ends meet...
        </div>
        <div>{renderSection()}</div>
      </div>

      <div className="h-full w-[30%] bg-slate-500">
        <div className="w-full h-[50%] p-5">
          <ul className="flex flex-col gap-2">
            <li
              className="p-2 bg-slate-900 hover:bg-red-800 cursor-pointer text-white"
              onClick={() => setActiveSection("hobbies")}
            >
              Hobbies
            </li>
            <li
              className="p-2 bg-slate-900 hover:bg-red-800 cursor-pointer text-white"
              onClick={() => setActiveSection("interests")}
            >
              Interests
            </li>
            <li
              className="p-2 bg-slate-900 hover:bg-red-800 cursor-pointer text-white"
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </li>
          </ul>
        </div>
        <div class="w-full h-full">
          <img src="https://scontent.fmnl45-2.fna.fbcdn.net/v/t39.30808-6/538085209_1848250285791209_8462924229299227118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJl1JceMeSTMLZVDaYtnZblA41ykGw4oSUDjXKQbDihH4G9clvLknNIgoj7b-amV_xwWNsYby2CIjsXEBgiolj&_nc_ohc=iJeB9wUAX1QQ7kNvwFaDWFj&_nc_oc=AdnlSNm29ezPlob9ychKBgeCOC1P2K-yo39UFDtU3aWdZotZJ6FvZuWlzOwd0YjBat4KAjRAmow5OuDyAyL5Z2bO&_nc_zt=23&_nc_ht=scontent.fmnl45-2.fna&_nc_gid=Ote5jnMkOOk_AtAOpChiFA&oh=00_AfdHnNu82eJjA8yrqcCjjdBDjfkCUugkt9LKvxDJM9JLFA&oe=68FC3F86" alt="" />
        </div>

      </div>
    </div>
  );
}
