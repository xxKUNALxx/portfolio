import './experience.css';
import React, { useState } from 'react';

function Experience() {
    const [activeTab, setActiveTab] = useState('Mgwing');

    const handleTabClick = (company) => {
        setActiveTab(company);
    };

    return (
        <div className="experience-container" id='experience'>
            <h2 className="experience-heading">Experience</h2>
            <div className="experience-content">
                <div className="tabs">
                    <button 
                        className={`tab-button ${activeTab === 'Mgwing' ? 'active' : ''}`} 
                        onClick={() => handleTabClick('Mgwing')}>
                        <strong>01.</strong> Mgwing Enterprises
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'Mgwing' && (
                        <div className="experience-details fade-in">
                            <h4>Full-Stack Intern <span>[ 2 Months ]</span></h4>
                            <ul>
                                <li>Worked as a <span className='highlighted-text'>Full-Stack Intern</span> at Mgwing Enterprises.</li>
                                <li>Developed a <span className='highlighted-text'>fully functional eCommerce website</span> from scratch.</li>
                                <li>Handled both <span className='highlighted-text'>frontend and backend development</span> using modern technologies.</li>
                                <li>Implemented user authentication, product management, and payment gateway integration.</li>
                                <li>Gained hands-on experience in designing a <span className='highlighted-text'>seamless UI/UX</span> for the platform.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
