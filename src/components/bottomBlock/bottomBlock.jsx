import './bottomBlock.scss'
import dogVito from '../../assets/img/dog_vito.png' 
import list from './list.js'
import timer from '../../assets/img/icons/timer.png'
import bigsymbol from '../../assets/img/icons/bigsymbol.png'
import mana from '../../assets/img/icons/mana.png'
import modulem from '../../assets/img/icons/module.png'
import rune from '../../assets/img/icons/rune.png'
import toolbox from '../../assets/img/icons/toolbox.png'
import vitoHelper from '../../assets/img/icons/vitoHelper.png'
import box from './../../assets/img/boxVito.png'


function BottomBlock(){
    return(
        <div className='bottomBlock'>
            <div className="bottomBlockColumn">
                <div className="bottomBlock_leftSide">
                    <div className="leftSide-img">
                        <img src={dogVito} alt="dog" />
                    </div>
                </div>
                <div className="bottomBlock_rightSide">
                    <div className="bottomBlock-title">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
                    <div className="bottomBlock-tabel">
                        <div className="tabelCategory">
                            <div className="tabel-catFreeServer categ">Бесплатные сервера</div>
                            <div className="tabel-catSubServer categ">Подписочный сервер</div>
                        </div>
                        <div className="tabel">
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={timer}  alt={list[0].img} />
                                    </div>
                                    <div className="text">{list[0].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[0].freeServer}</div>
                                    <div className="subServer">{list[0].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={toolbox}  alt={list[1].img} />
                                    </div>
                                    <div className="text">{list[1].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[1].freeServer}</div>
                                    <div className="subServer">{list[1].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={rune}  alt={list[2].img} />
                                    </div>
                                    <div className="text">{list[2].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[2].freeServer}</div>
                                    <div className="subServer">{list[2].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={bigsymbol}  alt={list[3].img} />
                                    </div>
                                    <div className="text">{list[3].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[3].freeServer}</div>
                                    <div className="subServer">{list[3].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={mana}  alt={list[4].img} />
                                    </div>
                                    <div className="text">{list[4].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[4].freeServer}</div>
                                    <div className="subServer">{list[4].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={modulem}  alt={list[5].img} />
                                    </div>
                                    <div className="text">{list[5].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[5].freeServer}</div>
                                    <div className="subServer">{list[5].subServer}</div>
                                </div>
                            </div>
                            <div className='bottomBlockItem'>
                                <div className="leftSide">
                                    <div className="icon">
                                        <img  src={vitoHelper}  alt={list[6].img} />
                                    </div>
                                    <div className="text">{list[6].text}</div>
                                </div>
                                <div className="rightSide">
                                    <div className="freeServer">{list[6].freeServer}</div>
                                    <div className="subServer">{list[6].subServer}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottoBlock_buy">
                        <div className="buy-img">
                            <img src={box} alt="boxVito" />
                        </div>
                        <div className="buy-composeBlock">
                            <div className="price">399&#8381;</div>
                            <div className="saleButton">ПРИОБРЕСТИ</div>
                        </div>
                    </div>
                </div>
                    
                


            </div>
        </div>
    )
} 

export default BottomBlock




