import React from "react";
import {
    CogIcon,
    BellIcon,
    HomeIcon,
    MailIcon,
    UserIcon,
    HeartIcon,
    ShareIcon,
    SearchIcon,
    HashtagIcon,
    ClipboardIcon,
    BadgeCheckIcon,
    BookmarkAltIcon,
    DotsHorizontalIcon,
    DotsCircleHorizontalIcon
} from '@heroicons/react/outline';
import Nav from '../Shared/Nav';
import {Icon} from '../Shared/Icon';
import NavItem from '../Shared/NavItem';

function WelcomeMain() {
    return <div className="border-b border-opacity-20 border-secondary-500">
        <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="font-bold text-lg text-secondary-600">
                Acceuil
            </h1>
            <Icon
                name="pupolar-tweet"
                className="w-5 h-5 text-gray-400"
            />
        </div>
    </div>
}

function CreateTweetForm() {
    return <div className="px-4 py-2 flex">
        <img
            alt=""
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1298709675093815296/jokdGvXk_400x400.jpg"
        />

        <div className="pl-3 w-full">
            <form action="" method="post" className="">
                <textarea
                    placeholder="Quoi de neuf ? "
                    className="w-full inline-block p-2 resize-none overflow-hidden bg-black focus:outline-none"
                ></textarea>
        
            </form>
            <div className="border-b border-secondary-400 border-opacity-20">
                <p className="text-primary-300 hover:bg-primary-400 hover:bg-opacity-10 px-2 py-3 inline-block rounded-xl cursor-pointer">
                    Tout le monde peut répondre
                </p>
            </div>

            <div className="flex items-center justify-between py-2">
                <div className="flex space-x-4">
                    <Icon name="medias" className="w-5 h-5 text-primary-100"/>
                    <Icon name="gif" className="w-5 h-5 text-primary-100"/>
                    <Icon name="question" className="w-5 h-5 text-primary-100"/>
                    <Icon name="emoji" className="w-5 h-5 text-primary-100"/>
                    <Icon name="programming" className="w-5 h-5 text-primary-100"/>
                </div>
                <button className="px-4 py-1 bg-primary-500 text-white rounded-3xl">
                    Tweeter
                </button>
            </div>
        </div>
    </div>
}

function PostHeader() {
    return <div className="flex items-center">
        <h4 className="font-bold text-secondary-600 inline-block">
            Manchester United
        </h4>
        <BadgeCheckIcon
            className="ml-1 w-5 h-5 text-secondary-600"
        />
        <span className="ml-1 text-md text-gray-600">@ManUtd</span>
        <span className="ml-2 text-md text-gray-600">{` `}.{` `}39 min</span>
    </div>
}

function PostContent() {
    return <div className="w-full text-secondary-600">
        If you know, you know...

        <p className="pt-4 text-primary-500">
            #WorldBeardDay
        </p>
        <p className="pt-4 text-primary-500">
            #MUFC
        </p>

        <div className="w-full h-72 mt-4">
            <img 
                alt=""
                className="w-full h-full object-cover rounded-3xl border border-opacity-20"
                src="https://pbs.twimg.com/media/E-a94IuX0AIwFui?format=jpg&name=small" 
            />
        </div>
    </div>
}

function ImageProfilePost() {
    return <img 
        alt=""
        className="w-12 h-12 rounded-full"
        src="https://pbs.twimg.com/profile_images/1432334305259401216/3N4bCQcs_400x400.jpg" 
    />
}

function PostReactions() {
    return <div className="flex justify-between items-center text-gray-500 text-sm p-2">
        <div className="flex items-center cursor-pointer">
            <Icon name="comments" className="w-4 h-5" />
            <span className="ml-2">79</span>
        </div>
        <div className="flex items-center cursor-pointer">
            <Icon name="retweet" className="w-4 h-5" /> 
            <span className="ml-2">222</span>
        </div>
        <div className="flex items-center cursor-pointer">
            <HeartIcon className="w-4 h-5" /> 
            <span className="ml-2">3,8 k</span>
        </div>
        <div className="flex items-center cursor-pointer">
            <ShareIcon className="w-4 h-5" />
        </div>
        <div/>
    </div>
}

function BorderBottom () {
    return <div className="border-b border-secondary-400 border-opacity-20"/>
}

export function MainContent ({ className }) {
    const data = [1,3,4,5]
    return <>
        <div className={`${className} border-r border-opacity-20 border-secondary-500`}>
            <WelcomeMain/>

            <div className="">
                <CreateTweetForm/>
                
                <BorderBottom/>
                
                {data.map(item => {
                    return <div className="" key={item}>
                        <div className="px-4 py-2 flex">
                            <ImageProfilePost/>

                            <div className="ml-3 w-full">
                                <PostHeader/>
                                <PostContent/>
                                <PostReactions/>
                            </div>
                        </div>
                        
                        <BorderBottom/>
                    </div>
                })}
            </div>
        </div>
    </>
}

export function SidebarLeft ({ className }) {
    return <div className={`${className} flex flex-col items-center relative border-r border-opacity-20 border-secondary-500 h-screen max-h-screen`}>
        <div className="flex justify-center items-center">
            <div className="">
                <div className="">
                    <div className="mb-8">
                        <Icon name="twitter" className="w-8 h-8 text-secondary-500"/>
                    </div>

                    <Nav>
                        <NavItem href="#" active icon={<HomeIcon className="w-6 h-6 mr-4"/>}>Acceuil</NavItem>
                        <NavItem href="#" icon={<HashtagIcon className="w-6 h-6 mr-4"/>}>Explorer</NavItem>
                        <NavItem href="#" icon={<BellIcon className="w-6 h-6 mr-4"/>}>Notifications</NavItem>
                        <NavItem href="#" icon={<MailIcon className="w-6 h-6 mr-4"/>}>Messages</NavItem>
                        <NavItem href="#" icon={<BookmarkAltIcon className="w-6 h-6 mr-4"/>}>Signets</NavItem>
                        <NavItem href="#" icon={<ClipboardIcon className="w-6 h-6 mr-4"/>}>Listes</NavItem>
                        <NavItem href="#" icon={<UserIcon className="w-6 h-6 mr-4"/>}>Profil</NavItem>
                        <NavItem href="#" icon={<DotsCircleHorizontalIcon className="w-6 h-6 mr-4"/>}>Plus</NavItem>
                    </Nav>

                    <div className="py-8">
                        <button type="button" className="bg-primary-500 text-center font-bold py-3 px-20 rounded-3xl focus:outline-none hover:bg-primary-800 transition-all duration-100 ease-in-out">
                            Tweeter
                        </button>
                    </div>
                </div>
            
                <ButtonProfileBottom className="absolute bottom-5 right-20"/>
            </div>
        </div>
    </div>
}

export function ButtonProfileBottom({ className }) {
    return <div className={`${className} flex items-center justify-between`}>
        <img
            alt=""
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1298709675093815296/jokdGvXk_400x400.jpg"
        />
        <div className="pl-2 pr-4">
            <h3 className="font-bold">Mamadou Saïkou</h3>
            <span className="text-gray-500 text-sm">@BahSaikou7</span>
        </div>
        <DotsHorizontalIcon className="w-6 h-6 text-secondary-500"/>
    </div>
}

export function SidebarRight ({ className }) {
    const list = [
        {
            tendenceHead: 'Sport · Tendances',
            tendenceTitle: 'Henry',
            tendenceState: '40,9 k Tweets',
        }, {
            tendenceHead: 'Tendance dans la catégorie Sénégal',
            tendenceTitle: '#CertifiedLoverBoy',
            tendenceState: '24,2 k Tweets',
        }, {
            tendenceHead: 'Tendance dans la catégorie Sénégal',
            tendenceTitle: 'Coup',
            tendenceState: '70,1 k Tweets',
        }
    ]
    const users = [
        {
            tag: '@haassaanvv',
            name: 'Haassnaa Barrie',
            url: 'https://pbs.twimg.com/profile_images/1430685700396048390/LEG4rw9A_normal.jpg'
        }, {
            tag: '@noumou29',
            name: 'Noumou 🇬🇳',
            url: 'https://pbs.twimg.com/profile_images/1396813424013742087/rjBZr-Lh_normal.jpg'
        }
    ]

    return <div className={`${className} border-none border-secondary-500`}>
        <div className="px-6 py-2 max-w-sm">
            <div className="relative">
                <input
                    type="search"
                    placeholder="Recherche Twitter"
                    className="w-full px-12 py-3 bg-default-500 rounded-full placeholder-default-50 focus:outline-none"
                />

                <SearchIcon
                    className="absolute top-4 left-4 w-5 h-5 text-default-50"
                />
            </div>

            <div className="bg-default-500 text-gray-300 px-4 my-4 py-2 rounded-2xl">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">
                        Tendances pour vous
                    </h3>
                    <CogIcon
                        className="w-5 h-5"
                    />
                </div>

                {list.map((item, key) => <div key={key} className="flex justify-between items-center py-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                            {item.tendenceHead}
                        </span>
                        <span className="text-xl font-semibold">
                            {item.tendenceTitle}
                        </span>
                        <span className="text-sm text-gray-500">
                            {item.tendenceState}
                        </span>
                    </div>

                    <DotsHorizontalIcon 
                        className="w-5 h-5"
                    />
                </div>)}

                <div className="py-2">
                    <a href="#" className="text-primary-600">Voir plus</a>
                </div>
            </div>
        
            <div className="bg-default-500 text-gray-300 my-4 py-2 rounded-2xl">
                <h3 className="text-xl font-bold px-4 pb-2">
                    Suggestions
                </h3>

                {users.map((user, key) => <div key={key} className="px-4 flex justify-between items-center py-3 hover:bg-default-600 cursor-pointer">
                    <div className="flex items-center">
                        <img
                            alt=""
                            src={user.url}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-3 flex flex-col">
                            <span className="font-semibold text-base text-gray-200">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.tag}
                            </span>
                        </div>
                    </div>

                    <button className="font-bold text-sm text-gray-900 bg-gray-200 px-4 py-1 rounded-2xl">
                        Suivre
                    </button>
                </div>)}

                <div className="px-4 py-3">
                    <a href="#" className="text-primary-600">Voir plus</a>
                </div>
            </div>
    
        </div>
    </div>
}