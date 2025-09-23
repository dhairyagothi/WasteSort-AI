import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { AuthProvider } from "@/contexts/auth-context";
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
import SignIn from "./routes/Account/signin";
import SignUp from "./routes/Account/signup";
import ProtectedRoute from "./components/ProtectedRoute";

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
                    element: (
                        <ProtectedRoute allowedRoles={["municipality", "citizen"]}>
                            <Schedule />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "real-time-tracking",
                    element: (
                        <ProtectedRoute>
                            <Tracking />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "tutorials",
                    element: <Tutorials />,
                },
                {
                    path: "ai-verification",
                    element: (
                        <ProtectedRoute>
                            <AiVerification />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "new-complaint",
                    element: (
                        <ProtectedRoute>
                            <Complaint />
                        </ProtectedRoute>
                    ),
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
                    element: (
                        <ProtectedRoute>
                            <PickupHistory />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: "personal-reports",
                    element: (
                        <ProtectedRoute allowedRoles={["municipality"]}>
                            <PersonalReports />
                        </ProtectedRoute>
                    ),
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
                {
                    path :"sign-in",
                    element: <SignIn />,
                },
                {
                    path :"sign-up",
                    element: <SignUp />,
                }
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <AuthProvider>
                <LanguageProvider>
                    <RouterProvider router={router} />
                </LanguageProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
