import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import SignIn from "../pages/Signin.vue";
import Signup from "../pages/Signup.vue";
import Dashboard from "../pages/Dashboard.vue";
import products from "../pages/Products.vue";
import EditProduct from "../pages/EditProduct.vue";
import Order from "../pages/Order.vue";
import Notification from "../pages/Notification.vue";
import Query from "../pages/Query.vue";
import Setting from "../pages/Setting.vue";
import UserProfile from "../pages/UserProfile.vue";
import ProductReviews from "../pages/ProductReviews.vue";
import Drafts from "../pages/Drafts.vue";
import AddProducts from "../pages/AddProducts.vue";
import LandingPage from "../pages/Landing.vue";
import About from "../pages/About.vue";
import FAQs from "../pages/FAQs.vue";
import Contactus from "../pages/ContactUs.vue";
import TermAndCondition from "../pages/TermsAndCondition.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/signin",
            name:"SignIn",
            component:SignIn,
        },
        {
            path:"/signup",
            name:"Signup",
            component:Signup,
        },
        {
            path:"/dashboard",
            name:"dashboard",
            component:Dashboard,
        },
        {
            path:"/products",
            name:"products",
            component:products,
        },
        {
            path:"/editproduct",
            name:"EditProduct",
            component:EditProduct,
        },
        {
            path:"/order",
            name:"Order",
            component:Order,
        },
        {
            path:"/notification",
            name:"Notification",
            component:Notification,
        },
        {
            path:"/query",
            name:"Query",
            component:Query,
        },
        {
            path:"/user_profile",
            name:"UserProfile",
            component:UserProfile,
        },
        {
            path:"/product_reviews",
            name:"ProductReviews",
            component:ProductReviews,
        },
        {
            path:"/drafts",
            name:"Drafts",
            component:Drafts,
        },
        {
            path:"/create_products",
            name:"AddProducts",
            component:AddProducts,
        },
        {
            path:"/about",
            name:"About",
            component:About,
        },
        {
            path:"/terms&condition",
            name:"TermAndCondition",
            component:TermAndCondition,
        },
        {
            path:"/faqs",
            name:"FAQs",
            component:FAQs,
        },
        {
            path:"/contact_us",
            name:"Contactus",
            component:Contactus,
        },
        {
            path:"/",
            name:"LandingPage",
            component:LandingPage,
        },
        {
            path:"/setting",
            name:"Setting",
            component:Setting,
        },
    ],                                     
});
export default router;
