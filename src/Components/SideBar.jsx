import React from "react";
import logo from "../assets/logo.png"
import {
  House,
  CalendarDays,
  Users,
  BriefcaseMedical,
  CreditCard,
  LogOut,
  CalendarRange,
  Settings
} from "lucide-react";
function SideBar(){

    return(
    <>  
      <div className="flex bg-[#8A807E] ">
        
        <nav className="w-64 h-screen bg-[#fce8df] ps-5 pt-3 flex flex-col gap-6 rounded-2xl ">
            <div className="flex flex-row items-center gap-3">
                <img src={logo} className="w-20 h-20 hover:cursor-pointer"/>
                <p>Admin Panel</p>
            </div>
            <div className="flex flex-col gap-6 ">
                <button className="flex items-center gap-3 rounded-full bg-[#E8C4B8] px-4 py-3">
                  <House size={20} />
                  <span>Accueil</span>
                </button>

                <button className="flex items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F3DDD6]">
                  <CalendarDays size={20} />
                  <span>Rendez-vous</span>
                </button>

                <button className="flex items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F3DDD6]">
                  <Users size={20} />
                  <span>Clients</span>
                </button>

                <button className="flex items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F3DDD6]">
                  <BriefcaseMedical size={20} />
                  <span>Services</span>
                </button>

                <button className="flex items-center gap-3 rounded-full px-4 py-3 hover:bg-[#F3DDD6]">
                  <CalendarRange size={20} />
                  <span>Calendrier</span>
                </button>
               
            </div>
            <div className="mt-auto pb-5">
              <button className="flex items-center gap-3 rounded-full px-4 py-3 hover:bg-red-100 hover:text-red-600 transition w-full">
                <LogOut size={20} />
                <span>Déconnexion</span>
              </button>
            </div>
        </nav>  
      </div>
    </>
    );
}

export default SideBar;