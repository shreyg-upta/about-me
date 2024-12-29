import './work.scss'
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import PleaseOpenInLaptop from './components/PleaseOpenInLaptop';
import DnChome from './assets/DnChome.png';

function Work() {
    return (
        <div className="work">
            <Navbar />
            <Cursor />
            <PleaseOpenInLaptop />
            <div className="work-header">
                <span>
                <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
</svg>
<h2>{"{All Projects}"}</h2>
<svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
</svg>
                </span>
            </div>
            <div className="projects">
                <div className="single">
                <div className="single-img">
                    <img src={DnChome} alt="" />
                </div>
                <div className="single-detail">
                    <h4>DnC</h4>
                    <p><span>Problem:</span> Nigerian businesses across all sectors especially SME's struggle to comply with company legal regulations. <br/>
                    <span>Solution:</span> Built a platform that will enable these companies at the tap of a button know what regulations apply to their incorporated company without having to afford a lawyer.</p>
                    <div class="button-wrap">
                     <button class="button" onClick={() => {
        window.location.href = 'https://daaruandchakna.company.site/';
    }}>Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single reverse">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/pipar_peinACEKO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256618" alt="" />
                </div>
                <div className="single-detail">
                   <h4>Pipar</h4>
                    <p>A Digital Web3 Platform For Tokenizing Company Shares/Stocks. These Assets Can Be Fungible Or Non-Fungible</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/movie_Si8QWOouP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256396" alt="" />
                </div>
                <div className="single-detail">
                    <h4>React Movie</h4>
                    <p>Stay Upto Date With Trending Movies, See The Authors Of These Movies And Their Casts. Also View The Ratings!</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single reverse">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/natour_QGZwpr7Ta.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256510" alt="" />
                </div>
                <div className="single-detail">
                    <h4>Natour</h4>
                    <p>A Platform That Helps You Discover The Most Intriguing Locations For Your Vacations. Book Hotels And Spa's At A Cheaper Rate</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/ncehr_GV14iEwWG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256179" alt="" />
                </div>
                <div className="single-detail">
                    <h4>Ncehr</h4>
                    <p>An NGO That Focuses On Solving The Problem Of Climate Change In Africa. They're Also Inter-Disciplinary With Various Academic Institutions Involved</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single reverse">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/guvve_sUg2If5kc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256276" alt="" />
                </div>
                <div className="single-detail">
                    <h4>Gruvve</h4>
                    <p>Web3 Startup Accelerator, Both In Finance And Human Resource. They Look For Web3 Contributors Who Want To Make An Impact In The Web3 Space</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
                <div className="single">
                <div className="single-img">
                    <img src="https://ik.imagekit.io/onyedika/slide/web3-forum_2lXPIycqd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651255256840" alt="" />
                </div>
                <div className="single-detail">
                    <h4>Web3 Forum</h4>
                    <p>A Web3 Forum Built On Top Of Polygon. Anyone Can Add Comments After Signing In With Metamask. This Was A Follow-Up Tutorial By Pointer.gg</p>
                    <div class="button-wrap">
                     <button class="button">Visit &rarr;</button>
                     </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Work