import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import About from "./page/About";
import i18n from "i18next";
import {initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Simple and Elegant": "Simple and Elegant",
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.",
                    "Get Started": "Get Started",
                    "WHAT I DO": "WHAT I DO",
                    "Responsive Mobile": "Responsive Mobile",
                    "Lavish CSS Template is designed by templatemo. Download, edit and use this layout.": "Lavish CSS Template is designed by templatemo. Download, edit and use this layout.",
                    "CSS Templates": "CSS Templates",
                    "We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.": "We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.",
                    "UI & UX Design": "UI & UX Design",
                    "Credits go to Pixabay and Unsplash for images used in this free CSS website template.": "Credits go to Pixabay and Unsplash for images used in this free CSS website template.",
                    "ABOUT LAVISH": "ABOUT LAVISH",
                    "DESIGNER & DEVELOPER": "DESIGNER & DEVELOPER",
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.",
                    "Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet": "Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
                    "Web Design": "Web Design",
                    "Mobile Apps": "Mobile Apps",
                    "SEO Stuffs": "SEO Stuffs",
                    "HTLM5 & CSS3": "HTLM5 & CSS3",
                    "PORTFOLIO": "PORTFOLIO",
                    "CONTACT ME": "CONTACT ME",
                    "120 Old Walking Street": "120 Old Walking Street",
                    "Copyright 2018 Lavish Personal Profile . Designed by templatemo": "Copyright © 2018 Lavish Personal Profile . Designed by templatemo",
                    "Your Name": "Your Nam",
                    "Your Email": "Your Email",
                    "Your Message": "Your Message",
                }
            },
            vi: {
                translation: {
                    "Simple and Elegant": "Đơn giản và thanh lịch",
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat." : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.",
                    "Get Started": "Bắt đầu",
                    "WHAT I DO": "NHỮNG GÌ TÔI LÀM",
                    "Responsive Mobile": "Điện thoại di động đáp ứng",
                    "Lavish CSS Template is designed by templatemo. Download, edit and use this layout.": "Mẫu CSS Lavish được thiết kế bởi templatemo. Tải xuống, chỉnh sửa và sử dụng bố cục này.",
                    "CSS Templates":  "Mẫu CSS",
                    "We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.": "",
                    "UI & UX Design": "UI & UX Design",
                    "Credits go to Pixabay and Unsplash for images used in this free CSS website template.": "Tín dụng thuộc về Pixabay và Unsplash cho những hình ảnh được sử dụng trong mẫu trang web CSS miễn phí này.",
                    "ABOUT LAVISH": "GIỚI THIỆU",
                    "DESIGNER & DEVELOPER": "NHÀ THIẾT KẾ & PHÁT TRIỂN",
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.",
                    "Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet": "Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
                    "Web Design": "Thiết kế web",
                    "Mobile Apps": "Ứng dụng di động",
                    "SEO Stuffs": "Nội dung SEO",
                    "HTLM5 & CSS3": "HTLM5 & CSS3",
                    "PORTFOLIO": "DANH MỤC",
                    "CONTACT ME": "LIÊN HỆ VỚI TÔI",
                    "120 Old Walking Street": "120 Phố Đi Bộ Cũ",
                    "Copyright 2018 Lavish Personal Profile . Designed by templatemo": "Copyright © 2018 Lavish Personal Profile . Thiết kế bởi templatemo",
                    "Your Name": "Tên của bạn",
                    "Your Email": "Email của bạn",
                    "Your Message": "Lời nhắn của bạn"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

const router = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
    },
    {
        path: "/about",
        element:  <About />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
