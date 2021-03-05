import React from 'react';

import PageBase from "../components/PageBase";
import PageHeader from "../components/PageHeader";
import PageBanner from '../components/PageBanner';
import Text from "../components/Text";
import FeatureCardSection from '../components/FeatureCardSection';

const formattedBannerText = (
    <>
        <h1>Experience iconic local architecture in minecraft</h1>
        <h3>In Collaboration with SUTD Architecture and Sustainable Design (ASD) Pillar</h3>
    </>
);

const featureCardDetails = {
    jth: {
       title: 'Jurong Town Hall',
       href: '/asd2020/jurong_town_hall',
       imgSource: require('../assets/images/asd-landing/Jurong Town Hall.png'),
       description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?'
    },
    theatre: {
        title: 'Theatre',
        href: '/asd2020/theatre',
        imgSource: require('../assets/images/asd-landing/National Theatre.png'),
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?' 
    },
    gallery: {
        title: 'National Design Centre',
        href: '/asd2020/design_centre',
        imgSource: require('../assets/images/asd-landing/National Design Centre.png'),
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, exercitationem neque magnam cum aliquam facilis error temporibus autem esse sequi odit, eum ratione est! Est culpa cumque obcaecati tempore at?' 
    }
};

const instructionDetails = {
    step1: {
        description: 'Step 1: Refer to instructions on [how to connect to our server network]'
    },
    step2: {
        description: 'Step 2: At the entrance to the grand hall with the SUTD logo, turn left to follow a grass path',
        imgSource: require('../assets/images/asd-landing/instructions/step_2.png')
    },
    step3: {
        description: 'Step 3: You will be greeted by a Chinatown-esque gate with shophouses lined up behind it.',
        imgSource: require('../assets/images/asd-landing/instructions/step_3.png')
    },
    step4: {
        description: 'Step 4: Enter the portal of each of the houses to visit their location in game. You have the ability to fly in these worlds.',
        imgSource: require('../assets/images/asd-landing/instructions/step_4a.png')
    },
}

const sectionHeader = {
    textTransform: 'uppercase',
    fontSize: '30px',
    color: 'var(--color-accent)',
    marginTop: '20px'
}

const underlineText = {textDecoration: 'underline'}

const noMarginTop = {marginTop: '0'}

const ASDProjectsComp = () => {
    return (
        <PageBase>
            <PageHeader>ASD 2020 projects</PageHeader>
            <PageBanner imgSource={require('../assets/images/asd-landing/Golden Mile Complex.png')}>
                {formattedBannerText}
            </PageBanner>
            <Text>In Summer 2020, 27 students from the 02.231 Conservation Theories and Approaches to Built Heritage module took to the blocky world of Minecraft as a challenge to distill the architecture design of buildings through a reductive thinking process. A total of 7 iconic local buildings were built as part of their coursework. Their builds now live in the SUTD Minecraft Server Network for the public to visit.</Text>
            
            <Text style={sectionHeader}>Watch the Video</Text>

            <Text style={sectionHeader}>The Buildings</Text>
            <Text style={underlineText}>Featured Builds</Text>
            <Text style={noMarginTop}>Read about how our ASD students did it</Text>
            <FeatureCardSection cardDetails={featureCardDetails}></FeatureCardSection>
            <Text style={underlineText}>All Builds</Text>
            <Text style={noMarginTop}>Golden Mile Complex – Bedok Marketplace – Tampines Junior College – Old Singapore Power Building </Text>
        
            <Text style={sectionHeader}>Visit Us</Text>
            <Text style={underlineText}>Visiting it ingame</Text>


            <Text style={underlineText}>Visit in your browser</Text>
            <Text style={noMarginTop}>Open the 3D maps <a href="#" style={underlineText}>here</a> (coming soon)!</Text>
        
        </PageBase>
    );
}

export default ASDProjectsComp;