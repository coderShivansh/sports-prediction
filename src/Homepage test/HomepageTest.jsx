import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomepageTest.css";
import {assets} from "../assets copy/assets";

const HomepageTest = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // State to track selected dropdown option

  // Function to handle dropdown selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle "See Live Matchup" button click
  const handleMatchClick = () => {
    navigate('/homepage1');
  };

  return (
    <div className="container-main|">
    <div className='container d-flex justify-content-flex-start align-items-center homepage'>
      <div className='homepage-nav container d-flex justify-content-center align-items-center'>
        <div className='homepage-nav-tabs d-flex justify-content-center align-items-center'>
            <a className='homepage-nav-tab homepage-nav-tabactive'>NBA</a>
            <a className='homepage-nav-tab'>NLB</a>
            <a className='homepage-nav-tab'>Tennis</a>
            <a className='homepage-nav-tab'>Golf</a>
            <a className='homepage-nav-tab'>Premier League</a>
        </div>
          {/* Dropdown */}
          <select className='homepage-nav-dropdown' value={selectedOption} onChange={handleSelectChange}>
          <option value='Prediction'>Prediction</option>
          <option className='homepage-nav-dropdown-val' value='option1'>Best Bets</option>
          <option className='homepage-nav-dropdown-val' value='option2'>Best Props</option>
          <option className='homepage-nav-dropdown-val' value='option3'>Best Trends</option>
          <option className='homepage-nav-dropdown-val' value='option3'>News</option>
        </select>
      </div>
      <div className='homepage-match-grid container d-flex justify-content-center align-items-center'>
        <div className='homepage-match-tile' onClick={handleMatchClick}>
          <div className='match-tile-top'>
            <div className='match-tile-timeline'>10:30PM, APR 27</div>
            <div className='match-tile-status'>LIVE</div>
          </div>
          <div className='match-tile-middle'>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.cavaliers} alt='Cavaliers'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.magic} alt='Magic'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
          </div>
          <div className='match-tile-bottom' onClick={handleMatchClick}>See Live Matchup</div>
        </div>
        <div className='homepage-match-tile' onClick={handleMatchClick}>
          <div className='match-tile-top'>
            <div className='match-tile-timeline'>10:30PM, APR 27</div>
            <div className='match-tile-status'>LIVE</div>
          </div>
          <div className='match-tile-middle'>
<div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.cavaliers} alt='Cavaliers'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.magic} alt='Magic'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
          </div>
          <div className='match-tile-bottom' onClick={handleMatchClick}>See Live Matchup</div>
        </div>
        <div className='homepage-match-tile' onClick={handleMatchClick}>
          <div className='match-tile-top'>
            <div className='match-tile-timeline'>10:30PM, APR 27</div>
            <div className='match-tile-status'>LIVE</div>
          </div>
          <div className='match-tile-middle'>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.cavaliers} alt='Cavaliers'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.magic} alt='Magic'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
          </div>
          <div className='match-tile-bottom' onClick={handleMatchClick}>See Live Matchup</div>
        </div>
        <div className='homepage-match-tile' onClick={handleMatchClick}>
          <div className='match-tile-top'>
            <div className='match-tile-timeline'>10:30PM, APR 27</div>
            <div className='match-tile-status'>LIVE</div>
          </div>
          <div className='match-tile-middle'>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.cavaliers} alt='Cavaliers'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
            <div className='match-tile-team'>
              <div className='match-tile-team-logo'><img src={assets.icons.magic} alt='Magic'/></div>
              <div className='match-tile-number'>
                <div className='match-tile-team-score'>59</div>
                <div className='match-tile-team-winrate'>59%</div>
              </div>
            </div>
          </div>
          <div className='match-tile-bottom' onClick={handleMatchClick}>See Live Matchup</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomepageTest;