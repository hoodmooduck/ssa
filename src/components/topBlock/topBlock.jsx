import './topBlock.scss'
import logo from '../../assets/img/logo.png'
import boxes from '../../assets/img/boxes.png'
import mafiaLeft from '../../assets/img/mafiaLeft.png'
import mafiaRight from '../../assets/img/mafiaRight.png'
import glow from '../../assets/img/glow.png'

function TopBlock(){
    return(
        <div className='topBlock'>
            <div className="leftMafia subElement">
                <img src={mafiaLeft} alt="mafiaLeft" />
            </div>
            <div className="rightMafia subElement">
                <img src={mafiaRight} alt="mafiaRight" />
            </div>
            <div className="glow subElement">
                <img src={glow} alt="glow" />
            </div>
            <div className="bottomBlur"></div>
            <div className="topBlockColumn">
                <div className="topBlock_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="topBlock_boxes">
                    <img src={boxes} alt="boxes" />
                </div>
                <div className="topBlock_textBlock">
                    <span className="textBlock-title">КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</span>
                    <span className="textBlock-subTitle">Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</span>
                </div>
            </div>
        </div>
    )
} 

export default TopBlock