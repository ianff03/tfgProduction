import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Example from "./components/ExampleComponent";

export default {
    mode: "history",
    linkActiveClass: "font-semibold",
    routes: [
        {
            path: "*",
            component: NotFound
        },
        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/login",
            component: Login,
            name: "Login"
        },
        {
            path: "/exemple",
            component: Example,
            name: "exemple"
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            beforeEnter: (to, form, next) => {
                axios
                    .get("/api/athenticated")
                    .then(() => {
                        next();
                    })
                    .catch(() => {
                        return next({ name: "Login" });
                    });
            }
        }
    ]
};