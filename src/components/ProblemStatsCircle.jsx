import React, { useEffect, useRef } from "react";
import * as styles from "../styles/PSC.module.css";

const ProblemStatsCircle = ({ easyCount, mediumCount, hardCount, totalSolved }) => {
  const total = 3521; // Total problems available
  const easyTotal = 873;
  const mediumTotal = 1826;
  const hardTotal = 822;

  // Reference for animation
  const circleRef = useRef(null);

  // Arc angle calculations
  const startAngle = -225; // degrees
  const endAngle = 45; // degrees
  const angleRange = 270; // total angle range (endAngle - startAngle)
  
  // Center and radius
  const centerX = 90;
  const centerY = 90;
  const radius = 65;
  
  // Calculate the points for the arc
  const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
  const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
  const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
  const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
  
  // Create the path string for the arc
  const arcPath = `M ${startX},${startY} A ${radius},${radius} 0 1 1 ${endX},${endY}`;
  
  // Calculate the total arc length
  const arcLength = (angleRange / 360) * (2 * Math.PI * radius);
  
  // Calculate the segment lengths based on proportion of SOLVED problems
  const easyProportion = easyCount / totalSolved;
  const mediumProportion = mediumCount / totalSolved;
  const hardProportion = hardCount / totalSolved;
  
  // Calculate the actual arc lengths
  const easyArcLength = arcLength * easyProportion;
  const mediumArcLength = arcLength * mediumProportion;
  const hardArcLength = arcLength * hardProportion;

  // Animation effect for drawing the circle on mount
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.classList.add(styles.animateCircle);
    }
  }, []);

  const percentageSolved = Math.round((totalSolved / total) * 100);

  return (

    <div className={styles.container}>
      <div className={styles.circleContainer} ref={circleRef}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          className={styles.circleProgress}
        >
          {/* Background circle (gray) */}
          <path
            d={arcPath}
            fill="transparent"
            stroke="#333"
            strokeWidth="10"
            className={styles.backgroundArc}
          />
          
          {/* Changed order: Easy problems segment (green) first */}
          <path
            d={arcPath}
            fill="transparent"
            stroke="#00cc66"
            strokeWidth="10"
            strokeDasharray={`${easyArcLength} ${arcLength - easyArcLength}`}
            strokeDashoffset={0}
            className={`${styles.progressArc} ${styles.progressGreen}`}
          />
          
          {/* Medium problems segment (yellow) second */}
          <path
            d={arcPath}
            fill="transparent"
            stroke="#ffcc00"
            strokeWidth="10"
            strokeDasharray={`${mediumArcLength} ${arcLength - mediumArcLength}`}
            strokeDashoffset={-easyArcLength}
            className={`${styles.progressArc} ${styles.progressYellow}`}
          />
          
          {/* Hard problems segment (red) last */}
          <path
            d={arcPath}
            fill="transparent"
            stroke="#ff4b4b"
            strokeWidth="10"
            strokeDasharray={`${hardArcLength} ${arcLength - hardArcLength}`}
            strokeDashoffset={-(easyArcLength + mediumArcLength)}
            className={`${styles.progressArc} ${styles.progressRed}`}
          />
          
          {/* Central Text */}
          <text x="90" y="85" textAnchor="middle" className={styles.percentageText}>
            {totalSolved}
          </text>
          <text x="90" y="105" textAnchor="middle" className={styles.totalText}>
            {"Solved"}
          </text>
         
        </svg>
      </div>
      <div className={styles.statistics}>
        <div className={`${styles.statRow} ${styles.easyHover}`}>
          <span className={styles.easyText}>Easy</span>
          <span className={styles.statValue}>{easyCount}</span>
          <div className={styles.hoverInfo}>
            <span>{Math.round((easyCount/easyTotal)*100)}% completed</span>
          </div>
        </div>
        <div className={`${styles.statRow} ${styles.mediumHover}`}>
          <span className={styles.mediumText}>Med.</span>
          <span className={styles.statValue}>{mediumCount}</span>
          <div className={styles.hoverInfo}>
            <span>{Math.round((mediumCount/mediumTotal)*100)}% completed</span>
          </div>
        </div>
        <div className={`${styles.statRow} ${styles.hardHover}`}>
          <span className={styles.hardText}>Hard</span>
          <span className={styles.statValue}>{hardCount}</span>
          <div className={styles.hoverInfo}>
            <span>{Math.round((hardCount/hardTotal)*100)}% completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatsCircle;