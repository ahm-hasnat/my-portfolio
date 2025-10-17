import React from 'react';
import Banner from '../../Components/Header/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import MySkills from '../../Components/MySkills/MySkills';
import MyProjects from '../../Components/MyProjects/MyProjects';
import Contacts from '../../Components/Contacts/Contacts';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

             <Helmet>
                <title>Hasnat - Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;