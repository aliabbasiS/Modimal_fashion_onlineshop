import React, { useState, useEffect } from "react";

const MainShopCard = () => {
    const [color, setColor] = useState([]);
    const [disc, setdisc] = useState('');
    const [img, setimg] = useState('');
    const [titlee, settitle] = useState('');

    //set colors
    useEffect(() => {
        let isMounted = true; // Track if the component is mounted
        const fetchColor = async () => {
            let data = await fetch('https://random-flat-colors.vercel.app/api/random?count=3');
            let res = await data.json();
            if (isMounted) {
                setColor(res['colors']);
            }
        };
        fetchColor();

        return () => {
            isMounted = false; // Cleanup function to prevent setting state on unmounted component
        };
    }, []); 

    //set disc
    useEffect(() => {
        let isMounted = true; // Track if the component is mounted
        const fetchdiscription = async () => {
            let data = await fetch('https://randomuser.me/api/');
            let disc = await data.json();
            if (isMounted) {
                setdisc(disc['results'][0]['email']);
                settitle(`${disc['results'][0]['name']['title']} ${disc['results'][0]['name']['first']} ${disc['results'][0]['name']['last']}`);
                setimg(disc['results'][0]['picture']['large']);
            }
        };
        fetchdiscription();

        return () => {
            isMounted = false; // Cleanup function to prevent setting state on unmounted component
        };
    }, []); 

    return (
        <div className="mx-2 flex gap-3 flex-col w-1/4 ">
            <img src={img}  className="w-full h-auto rounded-lg" alt="User"/>
            <h2 className="text-xl font-bold mt-2">{titlee}</h2>
            <p className="text-gray-600">{disc}</p>
            <div className="flex gap-3">
                <div style={{backgroundColor: color[0]}} className="w-6 ease-in-out delay-150 hover:scale-125 transition h-6 rounded-full"></div>
                <div style={{backgroundColor: color[1]}} className="w-6 transition  ease-in-out delay-150 hover:scale-125 h-6 rounded-full"></div>
                <div style={{backgroundColor: color[2]}} className="w-6 transition ease-in-out delay-150 hover:scale-125 h-6 rounded-full"></div>
            </div> 
        </div>
    );
}

export default MainShopCard;
