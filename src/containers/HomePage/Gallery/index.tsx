import * as React from 'react';
import './gallery.css'



export interface BannerProps {
    galleryData: any;
}




class GalleryContainer extends React.Component<BannerProps, any>{

    constructor(props: BannerProps) {
        super(props);
    }



    public generateGallery = (data: any) => {

        const rows: any = [];

        if (data && data.length > 0) {
            // tslint:disable-next-line:no-console
            console.log(data)
            data.forEach((item: any) => {
                rows.push(

                )
            })
        }
        return rows;
    }


    public generateTab() {

        return (
            <div className="tab-container" style={{}}>
                asda
            </div>
        )
    }




    public render() {

        if (this.props.galleryData) {
            const gallery = this.generateGallery(this.props.galleryData.values)
            const tabs = this.generateTab()
            return (
                <div className="gallery-container">
                    {tabs}
                    {gallery}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default GalleryContainer;
