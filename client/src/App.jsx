import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProutedRoute from "./components/auth/ProutedRoute";
import Loader from "./components/layouts/Loader";

const Home = lazy(() => import("./pages/Home"));
const Group = lazy(() => import("./pages/Group"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chats"));
const App = () => {
  let user = true;
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProutedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Group />} />
            <Route path="*" element={<Home />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProutedRoute user={!user} redirect="/">
                <Login />
              </ProutedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
