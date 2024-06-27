import About from "../components/Pages/About/About";
import Cart from "../components/Pages/Cart/Cart";
import Checkout from "../components/Pages/Checkout/Checkout";
import Contact from "../components/Pages/Contact/Contact";
import FAQs from "../components/Pages/FAQs/FAQs";
import Help from "../components/Pages/Help/Help";
import Home from "../components/Pages/Home/Home";
import Shop from "../components/Pages/Shop/Shop";
import ShopDetails from "../components/Pages/ShopDetails/ShopDetails";
import Wishlist from "../components/Pages/Wishlist/Wishlist";
import ErrorPage from "../components/Common/ErrorPage";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import ResetPassword from "../components/Auth/ResetPassword";
import MyAccount from "../components/Pages/Account/MyAccount";

export const routesObject = [
    {
        id: 1,
        path: '/',
        element:<Home />,
        name: 'Home',
        layout: true
    },
    {
        id: 2,
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorPage />,
        name: 'Shops',
        layout: true,
    },
    {
        id: 12,
        path: 'shop/:id',
        element: <ShopDetails />,
        errorElement: <ErrorPage />,
        name: 'ShoppingDetails',
        layout: true,
    },
    {
        id: 3,
        path: 'checkout',
        element: <Checkout />,
        name: 'Checkout',
        layout: true

    },
    {
        id: 4,
        path: 'contact',
        element: <Contact />,
        name: 'Contact',
        layout: true

    },
    {
        id: 5,
        path: 'about',
        element: <About />,
        name: 'About',
        layout: true

    },
    {
        id: 6,
        path: 'help',
        element: <Help />,
        name: 'Help',
        layout: true
    },
    {
        id: 7,
        path: 'faqs',
        element: <FAQs />,
        name: 'Faqs',
        layout: true

    },
    {
        id: 8,
        path: 'cart',
        element: <Cart />,
        name: 'Cart',
        layout: true
    },
    {
        id: 9,
        path: 'wishlist',
        element: <Wishlist />,
        name: 'wishlist',
        layout: true
    },

    {
        id: 10,
        path: 'signup',
        element: <SignUp />,
        name: 'SignUp',
        layout: false
    },
    {
        id: 11,
        path: 'signin',
        element: <SignIn />,
        name: 'SignIn',
        layout: false
    },
    {
        id: 13,
        path: 'resetpassword',
        element: <ResetPassword />,
        name: 'ResetPassword',
        layout: false
    },
    {
        id: 13,
        path: 'account',
        element: <MyAccount />,
        name: 'MyAccount',
        layout: true
    },
]
