import React, { useState, useEffect } from 'react';
// https://dh9ck0ub55.execute-api.us-east-1.amazonaws.com/Dev
const JummahTranscript = ({ data, setData, lecture1, setLecture1 }) => {
    return (
        <div>
            <h4>lecture title</h4>
            {lecture1.map((lecture) => (
                <p>{lecture.S.Transcript}</p>
            ))}
        </div>
    );
};

export default JummahTranscript;
