import React, { useState } from 'react'
import { assets } from '../../assets copy/assets'
import "./gameExpanded.css"
import { Link } from 'react-router-dom'

const GameExpanded = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedBetValue, setSelectedBetValue] = useState(null);
    const [customBetValue, setCustomBetValue] = useState('');
    const [isWalletOpen, setIsWalletOpen] = useState(false);

    const handleTeamSelection = (team) => {
        setSelectedTeam(team);
    };

    const handlePredefinedBetValueSelection = (value) => {
        setSelectedBetValue(value);
        // Reset custom bet value when a predefined value is selected
        setCustomBetValue('');
    };

    const handleCustomBetValueChange = (event) => {
        const value = event.target.value;
        // Clear selected bet value when custom value is changed
        setSelectedBetValue(value);
        setCustomBetValue(value);
    };

    const calculateWinAmount = () => {
        const betAmount = parseFloat(selectedBetValue);

        if (!isNaN(betAmount)) {
            const winAmount = betAmount * 0.9;

            return winAmount.toFixed(2);
        } else {
            return '0.00';
        }
    };

    const handleWallet = () => {
        setIsWalletOpen(!isWalletOpen);
    }



    return (
        <div className='gameExpanded container d-flex justify-content-flex-start align-items-center'>
            <div className='game-navbar'>
                <div className='navbar-logo'><Link to='/homepage'>Back</Link></div>
                <div className='user-balance' onClick={handleWallet}>
                    <img src={assets.icons.wallet} />
                    $300
                    {isWalletOpen ?
                        <div className='user-wallet-overlay'>
                            <div className='user-wallet-balance'>
                                <div className="user-wallet-and-balance">
                                    <div className='user-wallet-balance-placeholder'>Balance </div>
                                    <div className='user-wallet-balance-amount'>$300</div>
                                </div>
                                <div className='gameExpanded-bet-confirm-bttn'>Add Funds</div>
                            </div>
                            <div className='user-wallet-transaction-container'>
                                <div className='user-wallet-transaction-list'>
                                    <div className='user-wallet-transaction'>
                                        <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
                                            <div className='user-wallet-transaction-amount'>+$5.00</div>
                                            <div className='user-wallet-transaction-brief'>lorem ipsum sdssj jsldjd</div>
                                        </div>
                                        <div><img src={assets.icons.incoming}/></div>
                                    </div>
                                    <div className='user-wallet-transaction-separator'></div>
                                    <div className='user-wallet-transaction'>
                                        <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
                                            <div className='user-wallet-transaction-amount'>+$5.00</div>
                                            <div className='user-wallet-transaction-brief'>lorem ipsum sdssj jsldjd</div>
                                        </div>
                                        <div><img src={assets.icons.outgoing}/></div>
                                    </div>
                                    <div className='user-wallet-transaction-separator'></div>
                                    <div className='user-wallet-transaction'>
                                        <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
                                            <div className='user-wallet-transaction-amount'>+$5.00</div>
                                            <div className='user-wallet-transaction-brief'>lorem ipsum sdssj jsldjd</div>
                                        </div>
                                        <div><img src={assets.icons.outgoing}/></div>
                                    </div>
                                    <div className='user-wallet-transaction-separator'></div>
                                    <div className='user-wallet-transaction'>
                                        <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
                                            <div className='user-wallet-transaction-amount'>+$5.00</div>
                                            <div className='user-wallet-transaction-brief'>lorem ipsum sdssj jsldjd</div>
                                        </div>
                                        <div><img src={assets.icons.incoming}/></div>
                                    </div>
                                    <div className='user-wallet-transaction-separator'></div>
                                    <div className='user-wallet-transaction'>
                                        <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
                                            <div className='user-wallet-transaction-amount'>+$5.00</div>
                                            <div className='user-wallet-transaction-brief'>lorem ipsum sdssj jsldjd</div>
                                        </div>
                                        <div><img src={assets.icons.incoming}/></div>
                                    </div>
                                </div>
                                Show all transactions
                            </div>
                        </div>
                        : null}
                </div>
            </div>
            <div className='gameExpanded-header'>
                <div className='gameExpanded-header-content'>
                    <div className='gameExpanded-header-content-heading'>Thunder vs. Pelicans Prediction, Picks and Odds</div>
                    <div className='gameExpanded-header-content-body'>Our detailed prediction and analysis for the Thunder vs. Pelicans NBA game on April 27, 2024 is featured below. Drawing from 10,000 game simulations, we provide expert picks, betting odds, and insights.</div>
                </div>
                <div className='gameExpanded-header-buttons'>
                    <div className='gameExpanded-header-button'><img src={assets.icons.backward} /></div>
                    <div className='gameExpanded-header-button'><img src={assets.icons.forward} /></div>
                </div>
            </div>
            <div className='gameExpanded-banner-bet' style={{ display: "flex", flexDirection: "row", width: "100%", gap: "12px" }}>
                <div className='gameExpanded-banner'>
                    <div className='gameExpanded-banner-header'>
                        <div className='gameExpanded-banner-header-time'>10:30PM, APR 27</div>
                        <div className='gameExpanded-banner-header-title'>NBA</div>
                        <div className='gameExpanded-banner-header-status'>Updating LIVE</div>
                    </div>
                    <div className='gameExpanded-banner-mid'>
                        <div className='gameExpanded-banner-team'><img src={assets.icons.cavaliers} /></div>
                        <div className='gameExpanded-banner-scores'>59 : 59</div>
                        <div className='gameExpanded-banner-team'><img src={assets.icons.magic} /></div>
                    </div>
                    <div className='gameExpanded-banner-bottom'>Smoothie King Center</div>
                </div>
                <div className='gameExpanded-bet'>
                    <div className='gameExpanded-bet-upper'>-02:32:45</div>
                    <div className='gameExpanded-bet-lower'>
                        <div className='gameExpanded-bet-teams'>
                            <div className={`gameExpanded-bet-team ${selectedTeam === 'cavaliers' ? 'selected' : ''}`} onClick={() => handleTeamSelection('cavaliers')}>
                                <img src={assets.icons.cavaliers} alt='Cavaliers' />
                            </div>
                            <div className={`gameExpanded-bet-team ${selectedTeam === 'magic' ? 'selected' : ''}`} onClick={() => handleTeamSelection('magic')}>
                                <img src={assets.icons.magic} alt='Magic' />
                            </div>
                        </div>
                        <div className='gameExpanded-bet-value'>
                            <div className='gameExpanded-bet-predefined-value'>
                                <div className={`gameExpanded-bet-predefined-value-type ${selectedBetValue === '5.00' ? 'selected' : ''}`} onClick={() => handlePredefinedBetValueSelection('5.00')}>5$</div>
                                <div className={`gameExpanded-bet-predefined-value-type ${selectedBetValue === '10.00' ? 'selected' : ''}`} onClick={() => handlePredefinedBetValueSelection('10.00')}>10$</div>
                                <div className={`gameExpanded-bet-predefined-value-type ${selectedBetValue === '50.00' ? 'selected' : ''}`} onClick={() => handlePredefinedBetValueSelection('50.00')}>50$</div>
                                <div className={`gameExpanded-bet-predefined-value-type ${selectedBetValue === '100.00' ? 'selected' : ''}`} onClick={() => handlePredefinedBetValueSelection('100.00')}>100$</div>
                            </div>
                            <input
                                className={`gameExpanded-bet-custom-value ${customBetValue !== '' ? 'selected' : ''}`}
                                placeholder='other'
                                value={customBetValue}
                                onChange={handleCustomBetValueChange}
                                pattern="[0-9]*"  // Only allow numeric values
                                inputMode="numeric" // Set the keyboard input mode to numeric
                            />


                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "8px", color: '#FFF', fontFamily: 'Inter', fontSize: '11px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', letterSpacing: '0.2px' }}>
                            <div >Track <a>${selectedBetValue}</a> bet to win <a>${calculateWinAmount()}</a></div>
                            <div className='gameExpanded-bet-confirm-bttn'>Place Bet</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gameExpanded-boxtable'>
                <div className='gameExpanded-boxtable-header'>
                    <div className='gameExpanded-boxtable-header-text'>Box Table</div>
                    <div className='gameExpanded-boxtable-header-tabs'>
                        <div className='gameExpanded-boxtable-header-tab tab-active'>Player Stats</div>
                        <div className='gameExpanded-boxtable-header-tab'>Team Stats</div>
                    </div>
                </div>
                <div className='gameExpanded-boxtable-container'></div>
            </div>
        </div>
    )
}

export default GameExpanded