import * as React from 'react';
import './footer.css';

class Footer extends React.Component<any, any>{

  constructor(props: any) {
    super(props);
  }

  public render() {

    return (
      <div className="footer-container">
        &copy; Nanak-Niwas 2019
          </div>
    )
  }
}

export default Footer;