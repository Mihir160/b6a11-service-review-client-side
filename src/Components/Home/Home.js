import React from 'react';
import Header from '../Header/Header';
import useTitle from '../hooks/useTitle';
import PeoplePercentange from '../PeoplePercentange/PeoplePercentange';
import Services from '../Services/Services';
import Team from '../Team/Team';
import WhyChoose from '../WhyChoose/WhyChoose';
import WorkHandle from '../WorkHandle/WorkHandle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
             <Header></Header>
             <Services></Services>
             <WorkHandle></WorkHandle>
            <PeoplePercentange></PeoplePercentange>
            <WhyChoose></WhyChoose>
            <Team></Team>
        </div>
    );
};

export default Home;