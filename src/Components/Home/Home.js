import React from 'react';
import Header from '../Header/Header';
import useTitle from '../hooks/useTitle';
import PeoplePercentange from '../PeoplePercentange/PeoplePercentange';
import Services from '../Services/Services';
import WorkHandle from '../WorkHandle/WorkHandle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
             <Header></Header>
             <Services></Services>
             <WorkHandle></WorkHandle>
            <PeoplePercentange></PeoplePercentange>
        </div>
    );
};

export default Home;