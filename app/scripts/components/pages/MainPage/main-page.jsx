import React from 'react';

import SimpleSlider from './main-slider';

export class Mainpage extends React.Component {
  render() {
    return (
      <div className="index-page">
        <div className="slider">
          <SimpleSlider />
        </div>
      </div>
    );
  }
}
