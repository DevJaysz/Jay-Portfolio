import project1_img from '../assets/landscape-1.png'
import project2_img from '../assets/landscape-2.png'
import project3_img from '../assets/project_3.svg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import demo from '../assets/preview.png'





const mywork_data = [
    {
        image: project1_img,
        name: 'Lutong-Bahay',
        demo: 'https://lutongbahaysite.vercel.app/',
        icons: [
            {
                icon: html
            },
            {
                icon: css
            },
            {
                icon: react
            }
        ],
        preview: demo,
        description: 'Explore a treasure trove of traditional flavors and cherished family dishes, bringing the warmth and nostalgia of home-cooked meals to your table with every click.',
    },
    {
        image: project2_img,
        name: 'Gemini-Clone',
        demo: 'https://gemini-clone-landingpage.vercel.app/',
        icons: [
            {
                icon: html
            },
            {
                icon: css
            },
            {
                icon: react
            }
        ],
        preview: demo,
        description: 'The Google GeminiAi Clone is a project designed to emulate the features and capabilities, an innovative artificial intelligence (AI) system developed by Google.',
    },
    {
        image: project3_img,
        name: 'Student Services MS',
        icons: [
            {
                icon: html
            },
            {
                icon: css
            },
            {
                icon: react
            }
            ,
            {
                icon: php
            }
        ],
        preview: demo,
        description: 'The Student System MS is a comprehensive platform designed to streamline administrative tasks and enhance the overall efficiency of managing student-related services.'
    },
    // Add more objects as needed
];
export default mywork_data;