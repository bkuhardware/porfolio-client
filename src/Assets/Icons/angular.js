import React from 'react';
import { Icon } from 'antd';

const Svg = () => (
    <svg t="1569224087559" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12057" width="28" height="28"><path d="M435.8 536.2H512V353z" fill="#DD0031" p-id="12058"></path><path d="M400.9 616.8l-52.4 130.8h-97.2L512 163V64L94.9 212.7l63.6 551.5L512 960V616.8z" fill="#DD0031" p-id="12059"></path><path d="M512 353v183.2h76.2z" fill="#C3002F" p-id="12060"></path><path d="M512 64v99l259.8 584.6h-97.2l-52.4-130.8H512V960l353.5-195.8 63.6-551.5z" fill="#C3002F" p-id="12061"></path></svg>
);

export default (props) => (<Icon component={Svg} {...props} />);