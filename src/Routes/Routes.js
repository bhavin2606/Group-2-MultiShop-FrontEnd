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
import Structure from "../layout/Structure";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

export const routesObject = [
    {
        id: 1,
        path: '/',
        element:<Home />,
        name: 'Home',
        topBar: false,
        layout: true
    },
    {
        id: 2,
        path: 'shop',
        element: <Shop />,
        errorElement: <ErrorPage />,
        name: 'Shops',
        topBar: true,
        layout: true,
    },
    {
        id: 12,
        path: 'shop/:id',
        element: <ShopDetails />,
        errorElement: <ErrorPage />,
        name: 'ShoppingDetails',
        topBar: true,
        layout: true,
    },
    {
        id: 3,
        path: 'checkout',
        element: <Checkout />,
        name: 'Checkout',
        topBar: true,
        layout: true

    },
    {
        id: 4,
        path: 'contact',
        element: <Contact />,
        name: 'Contact',
        topBar: true,
        layout: true

    },
    {
        id: 5,
        path: 'about',
        element: <About />,
        name: 'About',
        topBar: true,
        layout: true

    },
    {
        id: 6,
        path: 'help',
        element: <Help />,
        name: 'Help',
        topBar: true,
        layout: true

    },
    {
        id: 7,
        path: 'faqs',
        element: <FAQs />,
        name: 'Faqs',
        topBar: true,
        layout: true

    },
    {
        id: 8,
        path: 'cart',
        element: <Cart />,
        name: 'Cart',
        topBar: true,
        layout: true

    },
    {
        id: 9,
        path: 'wishlist',
        element: <Wishlist />,
        name: 'wishlist',
        topBar: true,
        layout: true

    },

    {
        id: 10,
        path: 'signup',
        element: <SignUp />,
        name: 'SignUp',
        topBar: true,
        layout: false
    },
    {
        id: 11,
        path: 'signin',
        element: <SignIn />,
        name: 'SignIn',
        topBar: true,
        layout: false
    },
]
