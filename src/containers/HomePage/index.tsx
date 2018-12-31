import * as React from 'react';
import { connect } from 'react-redux';
import { fetchHomePageData, fetchHomePageDataForCards } from '../../actions';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';
import './homepage.css';
import MiddleSection from './MiddleSection';
import NavigationBar from './NavigationBar';

interface ConnectedDispatch {
  fetchHomePageData: () => void,
  fetchHomePageDataForCards: () => void,
}

export interface ConnectedState {
  homePageJSON: any,
  homePageCards: any;
}


class HomePage extends React.Component<ConnectedDispatch & ConnectedState, any> {


  constructor(props: ConnectedDispatch & ConnectedState) {
    super(props);
    this.state = {
      data: []
    }
  }



  public componentDidMount() {
    this.props.fetchHomePageData();
    this.props.fetchHomePageDataForCards();

  }

  

  public render() {

    const { homePageJSON, homePageCards } = this.props;


    return (
      <div className="homepage-root">
        <NavigationBar />
        <Banner niwasPictures={homePageJSON} />
        <MiddleSection cardsData={homePageCards}/>
        <Gallery galleryData={homePageJSON} />
        <Contact />
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state: any): ConnectedState => ({
  homePageJSON: state.HomePageReducer.HOMEPAGESECTIONS,
  homePageCards: state.HomePageReducer.HOMEPAGECARDS,

})

const mapDispatchToProps = (dispatch: any): ConnectedDispatch => ({
  fetchHomePageData: () => dispatch(fetchHomePageData()),
  fetchHomePageDataForCards: () => dispatch(fetchHomePageDataForCards()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);