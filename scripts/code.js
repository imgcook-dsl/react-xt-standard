import React from 'react';
import img0 from 'resources/images/activities/crmFission/mobile/img0.png';
import img1 from 'resources/images/activities/crmFission/mobile/img1.png';
import img2 from 'resources/images/activities/crmFission/mobile/img2.png';
import img3 from 'resources/images/activities/crmFission/mobile/img3.png';

const Index = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100.00000vw',
        height: '590.26667vw',
        position: 'relative',
        backgroundColor: '#f7f7f7'
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '0.00000vw',
          alignItems: 'flex-start',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <img style={{ width: '100.00000vw', height: '84.93333vw' }} src={img0}></img>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '73.86667vw'
        }}
      >
        <img style={{ width: '95.20000vw', height: '241.60000vw' }} src={img1}></img>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '3.06667vw'
        }}
      >
        <img style={{ width: '94.13333vw', height: '153.73333vw' }} src={img2}></img>
      </div>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '7.60000vw'
        }}
      >
        <img style={{ width: '92.93333vw', height: '78.93333vw' }} src={img3}></img>
      </div>
    </div>
  );
};

export default Index;
