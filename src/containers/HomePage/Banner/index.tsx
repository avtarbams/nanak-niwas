import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'

export interface BannerProps {
    niwasPictures: any;
}

class Banner extends React.Component<BannerProps, any>{

    constructor(props: BannerProps) {
        super(props);
    }

    public generateBanner = (data: any) => {

        const rows: any = [];

        if (data && data.length > 0) {
            // tslint:disable-next-line:no-console
            console.log(data)
            data.forEach((item: any) => {
                rows.push(
                    <Carousel.Item animtateIn={true} animateOut={false}>
                        <img className="banner-image" src={item[1]} />
                        <Carousel.Caption>
                            <h3>{item[0]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
        return rows;
    }




    public render() {

        if (this.props.niwasPictures) {
            const banner = this.generateBanner(this.props.niwasPictures.values)
            return (
                <div className="banner-class">
                    <div className="banner-text">
                        Avtar Singh Bamra djdkfdkfkdnfdjnfkdnf
                </div>
                    <Carousel pauseOnHover={false} controls={false}>
                        {banner}
                    </Carousel>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Banner;
