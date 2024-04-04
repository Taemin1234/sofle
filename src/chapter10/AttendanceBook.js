import React from 'react';

const students = [
    {
        name:'Inje'
    },
    {
        name:'steve'
    },
    {
        name:'james'
    },
    {
        name:'jane'
    },
    {
        name:'bob'
    }
]

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => (
                <li key={index}>{student.name}</li>
            ))}
        </ul>
    )
}

export default AttendanceBook;

