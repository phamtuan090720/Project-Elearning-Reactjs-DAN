import React from 'react';
import styles from './Home.module.scss';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';
import { MdPhonelink } from 'react-icons/md';
import { CgInfinity } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiSpellBook, GiBookshelf, GiTeacher } from 'react-icons/gi';
import { HiChatAlt2, HiPlay } from 'react-icons/hi';

export default function Home() {
  return (
    < >
      <div className={styles.banner} style={{backgroundImage:`url(/banner.png)`,width:'100%'}}>
        <div className={styles.introduce}>

          <div className={styles.header}>
            <div className={styles.stick_v} />
            <h1>Build Skills On Your Schedule With NameApp</h1>
          </div>

          <div className={styles.content}>
            <h2>The Revolutionary New Online Learning Platform For Students To Learn & Instructors To Host Their Courses</h2>
          </div>

          <Button shape="round" size="large" className={styles.btnSignUp}>
            <Link to="/register">Sign Up for <strong>FREE</strong></Link >
          </Button>
        </div>
      </div>
      <div className={styles.body1}>
        <div className={styles.header}>
          <h1>Make With Love <HeartFilled /></h1>
          <div className={styles.stick_h} />
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftItems}>
              <MdPhonelink className={styles.icon} /><h2>Online Courses</h2><p>Be the best in your industry</p>
            </div>
            <div className={styles.leftItems}>
              <CgInfinity className={styles.icon} /><h2>Lifetime Access</h2><p>Access to your courses anywhere</p>
            </div>
            <div className={styles.leftItems}>
              <FaChalkboardTeacher className={styles.icon} /><h2>Top Instructors</h2><p>Learn from trusted gurus</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.header}>
              <div className={styles.stick_v} />
              <h1>Learn Anywhere From Top Instructors</h1>
            </div>

            <div className={styles.content}>
              <p>Advance your career, learn a new skill, get creative. HeyBrain is a marketplace for teaching, learning, and connecting students to the skills needed to succeed.</p>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.exp}>
        <div className={styles.bgLeft}></div>
        <div className={styles.bgRight}></div>
        <div className={styles.header}>
          <h1>Best Experience <GiSpellBook /></h1>
          <div className={styles.stick_h} />
        </div>
        <div className={styles.content}>
          <div className={styles.items}>
            <div className={styles.row}><HiPlay className={styles.icon} /><h2>Online Courses</h2></div><p>Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
          </div>
          <div className={styles.items}>
            <div className={styles.row}><HiChatAlt2 className={styles.icon} /><h2>Discussions</h2></div><p>An online discussion is very similar to a f2f talk in that they require moderation and active management by the instructor, preparation time, and summarization of the concepts covered.</p>
          </div>
          <div className={styles.items}>
            <div className={styles.row}><GiBookshelf className={styles.icon} /><h2>Exercise</h2></div><p>Test your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
          </div>
        </div>
      </div>
      <div className={styles.ctn}>
        <div className={styles.forInstructor}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h1>Become An Instructor <GiTeacher /></h1>
            </div>
            <div className={styles.content}>
              <h2>Easily Create, Host, And Update Courses In appName Learning MarketPlace To Grow Your Influence.
                We provides the tools to deliver the content, while you get to focus on your courses, and expanding your Experience.</h2>
            </div>
            <Button shape="round" size="large" className={styles.btnSignUp}>
              <Link to="/register-teacher">Become An <strong>Instructor</strong></Link >
            </Button>
          </div>
          <div className={styles.gif}><img src="/gif.gif" alt='gif-teacher' /></div>
        </div>
      </div>
      <div className={styles.bgFooter} />
    </ >
  )
}