import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';



const StudentRateCorse = () => {
    const { data } = useSelector(state => state.statisticsCourseReducer)
    const getValues = () => {
        if (data?.student_rate_course) {
            return Object.values(data?.student_rate_course)
        }
        return []
    }
    const getKeys = () => {
        if (data?.student_rate_course) {
            return Object.keys(data?.student_rate_course)
        }
        return []
    }
    const dataConfig = {
        labels: getKeys(),
        datasets: [
            {
                label: 'Student rate',
                data: getValues(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <div className='header'>
                <h1 className='title'>Student Rate Course</h1>
            </div>
            <Bar data={dataConfig} options={options} />
        </>
    );
}

export default StudentRateCorse;