import React from "react";
import { 
    SidebarLeft,
    MainContent,
    SidebarRight
} from '../Shared/HomeComponents';

export default function Home () {
    return <>
        <div className="bg-black min-h-screen relative">
            <div className="flex text-white">
                <SidebarLeft className="w-2/4" />
                <MainContent className="w-4/5" />
                <SidebarRight className="w-2/3" />
            </div>
        </div>
    </>
}
