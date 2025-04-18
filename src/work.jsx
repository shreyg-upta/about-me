import "./work.scss";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import PleaseOpenInLaptop from "./components/PleaseOpenInLaptop";
import DnChome from "./assets/DnChome.png";
import calendifySS from "./assets/calendifySS.png";
import FRAM1 from "./assets/FRAM1.png";
// import FRAM2 from "./assets/FRAM2.png";
// import FRAM3 from "./assets/FRAM3.png";
// import FRAM4 from "./assets/FRAM4.png";
import PortfolioWebsite from "./assets/PortfolioWebsite.png";
import DisCo from "./assets/DisCo.png";

function Work() {
  return (
    <div className="work">
      <Navbar />
      <Cursor />
      <PleaseOpenInLaptop />
      <div className="work-header">
        <span>
          <svg
            width="16"
            height="40"
            viewBox="0 0 8 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <h2>{"{All Projects}"}</h2>
          <svg
            width="16"
            height="40"
            viewBox="0 0 8 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </span>
      </div>
      <div className="projects">
        <div className="single">
          <div className="single-img">
            <img src={DnChome} alt="" />
          </div>
          <div className="single-detail">
            <h4>DnC</h4>
            <p>
              <span>Problem:</span> Lack of available eatables at BITS-G after
              midnight. <br />
              <span>Solution:</span> Built a hyperlocal snack delivery platform
              that purchased discounted snacks (chips, biscuits, etc.) from
              Flipkart and delivered them room-to-room in our college between 6
              PM and 3 AM.
            </p>
            <div class="button-wrap">
              <button
                class="button"
                onClick={() => {
                  window.location.href = "https://daaruandchakna.company.site/";
                }}
              >
                Visit &rarr;
              </button>
            </div>
          </div>
        </div>
        <div className="single reverse">
          <div className="single-img">
            <img src={calendifySS} alt="" />
          </div>
          <div className="single-detail">
            <h4>Calendify</h4>
            <p>
              Calendify is a media house for Google Calendar, serving as a
              schedule-sharing platform. It allows users to upload, share, view,
              download, comment on, and rate calendars, connecting creators and
              consumers.
            </p>
            <div class="button-wrap">
              <button class="button">Visit &rarr;</button>
            </div>
          </div>
        </div>
        <div className="single">
          <div className="single-img">
            <img src={FRAM1} alt="" />
          </div>
          <div className="single-detail">
            <h4>Financial Risk Analysis</h4>
            <p>
              A study investigating the dynamic connectedness and volatility
              spillovers across global financial markets, with a particular
              focus on foreign exchange markets during periods of crisis,
              including the COVID-19 pandemic, using advanced econometric
              techniques such as time-varying parameter vector autoregressions
              (TVP-VAR) and spillover indices, the analysis captures the
              evolving interdependence and transmission mechanisms among asset
              classes.
            </p>
            <div class="button-wrap">
              <button class="button">Visit &rarr;</button>
            </div>
          </div>
        </div>
        <div className="single reverse">
          <div className="single-img">
            <img src={DisCo} />
          </div>
          <div className="single-detail">
            <h4>Course Allocation System</h4>
            <p>
              An algorithm, loosely inspired by the ford-fulkerson algorithm,
              that allocates courses to professors based on their preferences,
              capacity, and seniority.
            </p>
            <div class="button-wrap">
              <button class="button">Visit &rarr;</button>
            </div>
          </div>
        </div>
        <div className="single">
          <div className="single-img">
            <img
              src="https://ik.imagekit.io/onyedika/slide/ncehr_GV14iEwWG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256179"
              alt=""
            />
          </div>
          <div className="single-detail">
            <h4>BPGC CF Standings</h4>
            <p>
              An Chrome Extension that filters the standings of any Codeforces contest by various custom options (like 2023 Batch, BPGC everyone, etc.)
            </p>
            <div class="button-wrap">
              <button class="button">Visit &rarr;</button>
            </div>
          </div>
        </div>
        <div className="single reverse">
          <div className="single-img">
            <img src={PortfolioWebsite} alt="" />
          </div>
          <div className="single-detail">
            <h4>Portfolio Website</h4>
            <p>
              A website to showcase my projects, skills, and experiences. XD
              (this website itself)
            </p>
            <div class="button-wrap">
              <button class="button">Visit &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
