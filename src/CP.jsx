import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import React, { useState, useEffect } from "react";
import styles from "./CP.module.css"; // Importing modular CSS
import GitAvatar from "./assets/GitAvatar.png"; // Importing image from the assets folder
import CFLogo from "./assets/CFLogo.webp"; // Importing image from the assets folder
import CCLogo from "./assets/CCLogo.jpeg"; // Importing image from the assets folder
import ACLogo from "./assets/ACLogo.svg"; // Importing image from the assets folder
import LCLogo from "./assets/LCLogo.png"; // Importing image from the assets folder
import trophy from "./assets/trophy.svg"; // Importing image from the assets folder
import { subYears, isBefore, format } from "date-fns";
import CalendarHeatmap from "react-calendar-heatmap";
import PleaseOpenInLaptop from "./components/PleaseOpenInLaptop";
// import {ReactTooltip} from "react-tooltip";
 


const CP = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [values, setValues] = useState([]);

  const recentAC = ["Problem 1", "Problem 2", "Problem 3", "Problem 4"];
  const recentWA = ["Problem A", "Problem B", "Problem C", "Problem D"];
  const unsolved = ["Problem X", "Problem Y", "Problem Z"];
  const favorites = ["Problem Alpha", "Problem Beta", "Problem Gamma"];
  const [colorFilter, setColorFilter] = useState(null);

  const tabs = [
    { logo:trophy, title: "Recent Achievements", content: recentAC },
    { logo: CFLogo,title: "Codeforces", content: recentWA },
    { logo: ACLogo,title: "Atcoder", content: unsolved },
    { logo: CCLogo,title: "CodeChef", content: favorites },
    {logo: LCLogo, title: "LeetCode", content: favorites },
  ];
  const rtc = () => {
    window.location.href = "https://codeforces.com/profile/shrey71";
};
const icpc = () => {
window.location.href="https://en.wikipedia.org/wiki/International_Collegiate_Programming_Contest";
}
const startDate = subYears(new Date(), 1);
const endDate = new Date();
useEffect(() => {
  // Create a new array to hold values
  const newValues = [];
  // Create a new currentDate variable inside useEffect to avoid mutating the outer scope
  let currentDate = new Date(startDate.getTime());
  
  while (isBefore(currentDate, endDate)) {
    newValues.push({
      date: format(currentDate, "yyyy-MM-dd"),
      count: Math.floor(Math.random() * 5 - 2)
    });
    currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  }
  
  // Update the state with the new array
  setValues(newValues);
}, []);
  return (
    <div className={styles.container}>
      <Navbar />
      <Cursor />
      {/* <ReactTooltip /> */}
      <div className={styles.main}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
        <div className={styles.profileCard}>
            <div className={styles.profileImg}>
          <img
            src={GitAvatar}
            alt=""
            className={styles.profileImage}
          />
          <h2 className={styles.name}>shrey71</h2>
          </div>
          <p className={styles.bio}>
          Competitive programming is a fascinating field that involves solving complex algorithmic and computational problems within a set timeframe. It challenges your problem-solving skills and coding proficiency through rigorous and timed contests. I am deeply passionate about competitive programming and find it incredibly enjoyable. With a <span onClick={rtc} className={styles.red}>peak Codeforces rating of 1771</span>, I am excited about pushing my limits further and am planning to participate in prestigious competitions like the <span  onClick={icpc} className={styles.red}>ICPC</span> in the future.
          </p>
          <div className={styles.links}>
            <a href="https://codeforces.com/profile/shrey71"><img src={CFLogo}/>shrey71</a>
            <a href="https://atcoder.jp/users/shrey71"><img src={ACLogo}/>shrey71</a>
            <a href="https://leetcode.com/u/shreyg-upta/"><img src={LCLogo}/>shreyg-upta</a>
            <a href="https://www.codechef.com/users/shrey72"><img src={CCLogo}/>shrey72</a>
            <a href="https://codeforces.com/profile/shrey72"><img src={CFLogo}/>shrey72</a>
            <a href="https://codeforces.com/profile/shreyg-upta"><img src={CFLogo}/>shreyg-upta</a>
          </div>
        </div>
      </div>

        {/* Main Content Section */}
        <div className={styles.contentSection}>
          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.statCard}>
              <h3>Contest Rating</h3>
              <p className={styles.rating}>1,660</p>
              <p>Global Ranking: 90,430/579,240</p>
              <p>Attended: 1</p>
              <p>Top: 16.03%</p>
            </div>
            <div className={styles.statCard}>
              <h3>Solved Problems</h3>
              <p className={styles.solved}>60/3253 Solved</p>
              <p>Easy: 24/818</p>
              <p>Medium: 34/1707</p>
              <p>Hard: 2/728</p>
            </div>
            <div className={styles.statCard}>
              <h3>Submissions</h3>
              <p>129 submissions in the past one year</p>
              <p>Total active days: 28</p>
              <p>Max streak: 17</p>
            </div>
          </div>

          <div className={styles.calendar}>
          <div>{161} Submissions in one last year</div>
          <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        transformDayElement={(element) => {
          return React.cloneElement(element, {
            rx: 2,
            ry: 2,
            width: 9.5,  // smaller width
            height: 9.5  // smaller height
          });
        }}
        classForValue={(value) => {
          if (!value || value.count === 0) {
            return styles.colorEmpty;
          }
          return styles[`colorScale${value.count}`];
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": 'COunt:',
          };
        }}
        showWeekdayLabels={true}
        showMonthLabels={true}
        on
      />
      
            </div>

          {/* Tab Section */}
          <div className={styles.tabSection}>
            <div className={styles.tabHeaders}>
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${
                    activeTab === index ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <img src={tab.logo} alt="" className={styles.tabLogo} />
                  {tab.title}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>
              <ul>
                {tabs[activeTab].content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CP;