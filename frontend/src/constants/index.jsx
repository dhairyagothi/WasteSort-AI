import { 
    Home, 
    ChartColumn, 
    Calendar, 
    MapPin, 
    Video, 
    Image, 
    AlertTriangle, 
    MessageSquare, 
    History, 
    FileText, 
    User, 
    Settings, 
    HelpCircle, 
    Mail 
} from "lucide-react";



export const navbarLinks = [
    {
        title: "Home / Dashboard",
        links: [
            {
                label: "Overview",
                icon: Home,
                path: "/",
            },
            {
                label: "My Progress",
                icon: ChartColumn,
                path: "/my-progress",
            },
        ],
    },
    {
        title: "Waste Collection",
        links: [
            {
                label: "Schedule",
                icon: Calendar,
                path: "/schedule",
            },
            {
                label: "Real-Time Tracking",
                icon: MapPin,
                path: "/real-time-tracking",
            },
        ],
    },
    {
        title: "Sorting Guides",
        links: [
            {
                label: "Tutorials",
                icon: Video,
                path: "/tutorials",
            },
            {
                label: "AI Verification",
                icon: Image,
                path: "/ai-verification",
            },
        ],
    },
    {
        title: "Complaints & Feedback",
        links: [
            {
                label: "New Complaint",
                icon: AlertTriangle,
                path: "/new-complaint",
            },
            {
                label: "Track Status",
                icon: FileText,
                path: "/track-status",
            },
        ],
    },
    {
        title: "Notifications",
        links: [
            {
                label: "Alerts",
                icon: AlertTriangle,
                path: "/alerts",
            },
            {
                label: "Messages",
                icon: MessageSquare,
                path: "/messages",
            },
        ],
    },
    {
        title: "History & Reports",
        links: [
            {
                label: "Pickup History",
                icon: History,
                path: "/pickup-history",
            },
            {
                label: "Personal Reports",
                icon: FileText,
                path: "/personal-reports",
            },
        ],
    },
    {
        title: "My Account",
        links: [
            {
                label: "Profile Settings",
                icon: User,
                path: "/profile-settings",
            },
            {
                label: "Preferences",
                icon: Settings,
                path: "/preferences",
            },
        ],
    },
    {
        title: "Help & Support",
        links: [
            {
                label: "FAQ",
                icon: HelpCircle,
                path: "/faq",
            },
            {
                label: "Contact Support",
                icon: Mail,
                path: "/contact-support",
            },
        ],
    },
];

export const overviewData = [
    { name: "Jan", total: 1800 },
    { name: "Feb", total: 2200 },
    { name: "Mar", total: 1300 },
    { name: "Apr", total: 4700 },
    { name: "May", total: 2500 },
    { name: "Jun", total: 6200 },
    { name: "Jul", total: 2800 },
    { name: "Aug", total: 5100 },
    { name: "Sep", total: 2300 },
    { name: "Oct", total: 4300 },
    { name: "Nov", total: 1700 },
    { name: "Dec", total: 2700 },
];


