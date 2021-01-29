import React from "react";
import Styled from "styled-components";

const Skills = () => {
    return(
        <StyledSkills>
            <h1>Skills</h1>
            <p>HTML</p>
            <div className="container">
                <div className="skills html">90%</div>
            </div>
            <p>CSS</p>
            <div className="container">
                <div className="skills css">90%</div>
            </div>
            <p>JavaScript</p>
            <div className="container">
                <div className="skills js">100%</div>
            </div>
            <p>React</p>
            <div className="container">
                <div className="skills react">100%</div>
            </div>
            <p>Node</p>
            <div className="container">
                <div className="skills node">90%</div>
            </div>
        </StyledSkills>
    )
}

export default Skills;

const StyledSkills = Styled.div`
    width: 100%;
    .container {
        width: 100%;
        background-color: #ddd;
    }

    .skills {
        text-align: right;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
    }
    .html { width: 90%; background-color: #4CAF50; animation: load 2s 0s;}
    .css { width: 90%; background-color: #2196F3; animation: load 2s 0s;}
    .js { width: 100%; background-color: #f44336; animation: load 2s 0s;}
    .react { width: 100%; background-color: #808080; animation: load 2s 0s;}
    .node { width: 90%; background-color: hotpink; animation: load 2s 0s;}

    @keyframes load {
        from {
            width: 0%
        }
    }
`;