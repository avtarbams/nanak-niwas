import * as React from 'react';
import './cards.css';


export interface MapCardProps {
    /**
   * Header title for the card
   */
    title?: string

    /**
     * SubTitle of the Card
     */
    subTitle?: string




    /** The action on the on click event  */
    onClick?: (event: any) => any;

}
class Cards extends React.Component<MapCardProps, any> {
    constructor(props: MapCardProps) {
        super(props);
    }

    public renderCard = () => {


        const { title, subTitle, onClick } = this.props;

        return (
            <div className="card-container" onClick={onClick} >
                <div className="card-title">
                    {title}
                </div>
                <div className="card-subtitle">
                    {subTitle}
                </div>
            </div >
        );


    }

    public render() {
        return this.renderCard()
    }
}

export default Cards;