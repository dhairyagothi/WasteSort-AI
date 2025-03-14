import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Progress from "@/routes/dashboard/progress";
import Schedule from "@/routes/Waste-Collection/schedule";
import Tracking from "@/routes/Waste-Collection/tracking";
import Tutorials from "@/routes/Sorting-guides/tutorial";
import AiVerification from "@/routes/Sorting-guides/Ai-verification";
import Messages from "@/routes/notification/messages";
import Alerts from "@/routes/notification/alerts";
import Complaint from "@/routes/Complaints-Feedback/complaint";
import Track from "@/routes/Complaints-Feedback/track";
import PickupHistory from "@/routes/Reports/pickuphistory";
import PersonalReports from "@/routes/Reports/personalreports";
import Profile from "@/routes/Account/profile";
import Settings from "@/routes/Account/settings";
import Contact from "@/routes/Help/contact";
import Faq from "@/routes/Help/Faq";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "my-progress",
                    element: <Progress />,
                },
                {
                    path: "schedule",
                    element: <Schedule />,
                },
                {
                    path: "real-time-tracking",
                    element: <Tracking />,
                },
                {
                    path: "tutorials",
                    element: <Tutorials />,
                },
                {
                    path: "ai-verification",
                    element: <AiVerification />,
                },
                {
                    path: "new-complaint",
                    element: <Complaint />,
                },
                {
                    path: "track-status",
                    element: <Track />,
                },
                {
                    path: "alerts",
                    element: <Alerts />,
                },
                {
                    path: "messages",
                    element: <Messages />,
                },
                {
                    path: "pickup-history",
                    element: <PickupHistory />,
                },
                {
                    path: "personal-reports",
                    element: <PersonalReports />,
                },
                {
                    path: "profile-settings",
                    element: <Profile />,
                },
                {
                    path: "preferences",
                    element: <Settings />,
                },
                {
                    path: "faq",
                    element: <Faq />,
                },
                {
                    path: "contact-support",
                    element: <Contact />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
