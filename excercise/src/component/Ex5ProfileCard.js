import {Component} from "react";
import './Ex5ProfileCard.css';

class Ex5ProfileCard extends Component {
    render() {
        return (
            <>
                <div className={'<container'}>
                    <div className={'card'}>
                        <div className={'card--header'}>
                            <img className={'avatar'}
                                 src={'https://file3.qdnd.vn/data/images/0/2023/08/20/huutruong/messi.png?dpi=150&quality=100&w=870'}
                                 alt={'avatar'}/>
                        </div>
                        <div className={'card--body'}>
                            <div>
                                <p className="text-header">Lionel Messi</p>
                                <p className="text-sub">
                                    Lionel Messi was born 24 June 1987
                                </p>
                                <button className="btn third">FOLLOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Ex5ProfileCard;