import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';





const StudentJoinCourse = () => {

    const { data } = useSelector(state => state.statisticsCourseReducer)
    // console.log(Object.keys(data?.student_join_course))
    const getlabel = () => {
        if (data?.student_join_course) {
            return Object.keys(data?.student_join_course)
        }
        return []
    }
    const getValue = () => {
        if (data?.student_join_course) {
            return Object.values(data?.student_join_course)
        }
        return []
    }
    const dataConfig = {
        labels: getlabel(),
        datasets: [
            {
                label: 'Student join course',
                data: getValue(),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
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
                <h1 className='title'>Statistics of students participating in the course</h1>
            </div>
            <Line data={dataConfig} options={options} />
        </>
    );
}

export default StudentJoinCourse;