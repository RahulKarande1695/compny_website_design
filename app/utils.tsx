export const data = [
    {
        title: 'Product',
        links: [
            {
                label: 'Overview',
                link: '#',
            },
            {
                label: 'Features',
                link: '#',
            },
            {
                label: 'Solutions',
                link: '#',
            },
        ],
    },
    {
        title: 'Legal',
        links: [
            {
                label: 'Terms',
                link: '#',
            },
            {
                label: 'Privacy',
                link: '#',
            },
            {
                label: 'Cookies',
                link: '#',
            },
            {
                label: 'Licenses',
                link: '#',
            },
        ],
    },
    {
        title: 'Company',
        links: [
            {
                label: 'About us',
                link: '#',
            },
            {
                label: 'Careers',
                link: '#',
            },
            {
                label: 'News',
                link: '#',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                label: 'Blog',
                link: '#',
            },
            {
                label: 'Help Center',
                link: '#',
            },
            {
                label: 'Support',
                link: '#',
            },
        ],
    },
];
export const links2 = [
    {
        id:'buildYourOwn',
        link: '/buildYourOwn',
        label: 'Build your own',
    },
    // {
    //     id:'ourTech',
    //     link: '/ourTech',
    //     label: 'OUR TECH',
    // },
    {
        id:'aboutUs',
        link: '/aboutUs',
        label: 'About Us',
    },
];

export const carouselSlideInfo = [
    { id: 1, question: 'Please enter the name of your company', placeHolder: 'Type your name here', value: '' },
    { id: 2, question: 'Please enter your email address', placeHolder: 'Type your email here', value: '' },
    { id: 3, question: 'Please enter your contact number', placeHolder: 'Type your number here', value: '' },
];
interface MyObject {
    id: string;
    img: string;
    title: string;
    description: string;
}
export const ourTechData: MyObject[] = [
    {
        id:'left',
        img: './firstImage.png',
        title: 'safety first apporach',
        description: 'Buzz:saftey-focused EV charging with robust infrastructur and multiple saftety features',
    },
    {
       id:'center',
        img: './secondImage.png',
        title: 'tailored infrastructure',
        description: 'Empowering EV charging with customized infrastructure and unified solutions',
    },
    {
        id:'center2',
        img: './thirdImage.png',
        title: 'install maintain',
        description: 'Expertise in installing and maintaining for seamless EV charging opertions',
    },
    {
        id:'right',
        img: './fourthImage.png',
        title: 'payment and metring',
        description: 'Effortless and streamlined payment and metering solutions for hassle-free EV charging',
    },
];
export const indicator = [
    { id: 1, name: 'first indicator' },
    { id: 2, name: 'second indicator' },
    { id: 3, name: 'third indicator' },
];
export const allDone = [{id:1,name:'Contact'},{id:2,name:'Requirements'},{id:3,name:'Contract'},{id:4,name:'Commisions'},];

export const useCasesTabs = [
    {
        designId:"tabUsecase first",
        id:"1",
        tabName:"Automotive OEMs"
    },
    {
        designId:"tabUsecase second",
        id:"2",
        tabName:"EV Ecosystem"
    },
    {
        designId:"tabUsecase third",
        id:"3",
        tabName:"Fleet Managers"
    },
    {
        designId:"tabUsecase fourth",
        id:"4",
        tabName:"Finance"
    },
    {
        designId:"tabUsecase fifth",
        id:"5",
        tabName:"Data as a service"
    },
]
