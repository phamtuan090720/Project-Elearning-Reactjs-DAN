import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';




export default function StatisticListCourse() {
    const { data } = useSelector(state => state.statisticsListCourseReducer)
    console.log(data?.statistics_course)
    const getListLabel = () => {
        let listLable = []
        if (data?.statistics_course) {
            data?.statistics_course.forEach((item) => {
                listLable.push(item.name_course)
                console.log(item)
            })
        }
        return listLable;
    }
    const getValueAvgRate = () => {
        let listLable = []
        if (data?.statistics_course) {
            data?.statistics_course.forEach((item) => {
                listLable.push(item.rate_avg)
                console.log(item)
            })
        }
        return listLable;
    }
    const getCountStudent = () => {
        let listLable = []
        if (data?.statistics_course) {
            data?.statistics_course.forEach((item) => {
                listLable.push(item.count_student)
                console.log(item)
            })
        }
        return listLable;
    }
    const dataConfigAvgRate = {
        labels: getListLabel(),
        datasets: [
            {
                label: 'Avg Rate',
                data: getValueAvgRate(),
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
    const dataConfigStudentCount = {
        labels: getListLabel(),
        datasets: [
            {
                label: 'Student count',
                data: getCountStudent(),
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
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
    };
    return (
        <>
            <div className='header'>
                <h1 className='title'>List Course</h1>
            </div>
            <Bar data={dataConfigAvgRate} options={options} />
            <Bar data={dataConfigStudentCount} options={options} />
        </>
    )
}
