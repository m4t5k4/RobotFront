import React from 'react';

const Home = () => {
    return (
        <div className="post-container">
            <h1 className="post_heading">Robots</h1>
            <br />
            <form className="form">
                <p>Robots are machines that can substitute for humans and replicate human actions and are used to do jobs that are difficult, impossible, or just tedious for humans to do. Robots can be used in many situations and for lots of purposes, but today many are used in dangerous environments (including bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g. in space, under water, in high heat, and for clean up and containment of hazardous materials and radiation).</p>
                <p>Robots can take on any form but some are made to resemble humans in appearance. This is said to help in the acceptance of a robot in certain replicative behaviors usually performed by people. Such robots attempt to replicate walking, lifting, speech, cognition, or any other human activity.</p>
                <p>Many of today's robots are inspired by nature, contributing to the field of bio-inspired robotics.</p>
                <img src="./images/logo.jpg" height={175} alt="logo"/>
            </form>
        </div>
    );
}

export default Home;