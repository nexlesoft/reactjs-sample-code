import React from 'react';
import cn from 'classnames';

import './header.scss';
import Images from '../../../images';

function TitleComponent() {
  return (
    <div className="title-1">
      <h1>Nexlesoft Samples</h1>
    </div>
  );
}

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className={cn('header-wrapper')}>
        <div className={cn('header', 'container')}>
          <img
            src={Images.nexleLogo}
            height="88"
            alt="Nexle Never Stay The Same"
          />
          <div className="header-sub">{<TitleComponent />}</div>
        </div>
      </div>
    );
  }
}

// export default Header;
export default Header;
