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
                <div className="skills css">80%</div>
            </div>
            <p>JavaScript</p>
            <div className="container">
                <div className="skills js">90%</div>
            </div>
            <p>React</p>
            <div className="container">
                <div className="skills react">90%</div>
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
    .html { width: 90%; background-color: #4CAF50;}
    .css { width: 80%; background-color: #2196F3;}
    .js { width: 65%; background-color: #f44336;}
    .react { width: 60%; background-color: #808080;}
    .node { width: 80%; background-color: hotpink;}
`;