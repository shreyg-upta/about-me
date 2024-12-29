import React, { useState } from 'react';
import Cursor from './components/cursor';
import Navbar from './components/navbar';
import styles from './Experience.module.css';
import CFLogo from './assets/CFLogo.webp';
import CCLogo from './assets/CCLogo.jpeg';
import BITS from './assets/bits-goa.jpeg';
import BITSLogo from './assets/BITS_Pilani-Logo.svg';
import PleaseOpenInLaptop from './components/PleaseOpenInLaptop';

const educationData = [
    {
        year: '2018-2022',
        location: 'Pitampura, Delhi',
        institution: 'KIIT World School',
        description: 'School Studying Computer Science with a Minor in Finance',
        image: BITS,
        logo: BITSLogo,
    },
    {
        year: '2020 - 2022',
        location: 'Kohat, Delhi',
        institution: 'FIITJEE',
        description: 'Preparing for JEE Advanced and BITSAT in the institute',
        image: BITS,
        logo: BITSLogo,
    },
    {
        year: '2022 - 2026',
        location: 'Goa',
        institution: 'BITS Pilani',
        description: 'Studying Computer Science with a Minor in Finance.',
        image: BITS,
        logo: BITSLogo,
    },
   
];

const internshipData = [
    {
        year: '2021',
        location: 'Austin, TX',
        company: 'Square',
        description: 'Led a team of designers developing next-gen eCommerce solutions.',
        image: 'path_to_square_image', // Replace with your image path
        logo: CFLogo,
    },
    {
        year: '2020',
        location: 'Mountain View, CA',
        company: 'Google',
        description: 'Developed innovative AI solutions for various Google products.',
        image: 'path_to_google_image', // Replace with your image path
        logo: CCLogo,
    },
];

const involvementData = [
    {
        year: '2023',
        location: 'Goa',
        organization: 'AlgoManiaX',
        description: 'Mentored students in competitive programming and hosted workshops.',
        image: 'path_to_algomaniax_image', // Replace with your image path
        logo: BITSLogo,
    },
];

const certificationData = [
    {
        year: '2023',
        institution: 'Coursera',
        title: 'Full-Stack Development Specialization',
        description: 'Covered modern web technologies, backend APIs, and database management.',
        image: 'path_to_certification_image', // Replace with your image path
        logo: 'path_to_coursera_logo', // Replace with your logo path
    },
];

const Experience = () => {
    const [activeEducation, setActiveEducation] = useState(2);
    const [activeInternship, setActiveInternship] = useState(0);
    const [activeInvolvement, setActiveInvolvement] = useState(0);
    const [activeCertification, setActiveCertification] = useState(0);

    const renderSection = (data, activeIndex, setActiveIndex, sectionTitle) => (
        <>
            <h1>#{sectionTitle}</h1>
            <div className={styles.timelineContainer}>
                <div className={styles.timeline}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.logo} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={item.logo} alt={item.title || item.company || item.organization} className={styles.logoImage} />
                            <div className={styles.underline}></div>
                        </div>
                    ))}
                </div>
                <div className={styles.content}>
                    <img src={data[activeIndex].image} alt={data[activeIndex].title || data[activeIndex].company || data[activeIndex].organization} className={styles.companyImage} />
                    <div className={styles.text}>
                        <h3>{data[activeIndex].year} • {data[activeIndex].location}</h3>
                        <h2>{data[activeIndex].title || data[activeIndex].company || data[activeIndex].institution || data[activeIndex].organization}</h2>
                        <p>{data[activeIndex].description}</p>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className={styles.main2}>
            <PleaseOpenInLaptop />
            <Navbar />
            <Cursor />
            <div className={styles.main}>
                <div className={styles.gap} />
                {renderSection(educationData, activeEducation, setActiveEducation, 'Education')}
                {renderSection(internshipData, activeInternship, setActiveInternship, 'Internships')}
                {renderSection(involvementData, activeInvolvement, setActiveInvolvement, 'Student Involvements')}
                {renderSection(certificationData, activeCertification, setActiveCertification, 'Certifications')}
                <div className={styles.gap} />
            </div>
        </div>
    );
};

export default Experience;
