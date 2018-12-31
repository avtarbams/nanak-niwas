import * as React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import Cards from '../../../components/Card';
import './middlesection.css'

export interface BannerProps {
    cardsData: any;
}

class MiddleSection extends React.Component<BannerProps, any>{

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
                    <Carousel.Item>
                        <Cards title={item[0]} subTitle={item[1]} />
                    </Carousel.Item>
                )
            })
        }
        return rows;
    }




    public render() {

        if (this.props.cardsData) {
            const banner = this.generateBanner(this.props.cardsData.values)
            return (
                <div className="middlesection-container">
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="banner-class">
                                <Carousel>
                                    {banner}
                                </Carousel>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                        dfdf
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MiddleSection;
