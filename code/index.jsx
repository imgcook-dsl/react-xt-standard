import React, { Component } from 'react';
import img1 from 'resources/images/activities/halloween/pc/307f998021c711ecbd224f579ef19aa8.png';
import img2 from 'resources/images/activities/halloween/pc/30ad122021c711eca4909541617492c8.png';
import img3 from 'resources/images/activities/halloween/pc/30f84bf021c711ec8e7d0dac20d72755.png';
import img4 from 'resources/images/activities/halloween/pc/335c2c9021c711ecb0c73fe9fe75da97.png';
import img5 from 'resources/images/activities/halloween/pc/36e9720021c711ecb974edc5b199b475.png';
import img6 from 'resources/images/activities/halloween/pc/3781e17021c711ecb0c73fe9fe75da97.png';
import img7 from 'resources/images/activities/halloween/pc/3838392021c711ecb0c73fe9fe75da97.png';
import img8 from 'resources/images/activities/halloween/pc/37fe647021c711eca78d0907794f3ea9.png';
import img9 from 'resources/images/activities/halloween/pc/37d7f0b021c711ec8fb1573d2b0c245d.png';
import img10 from 'resources/images/activities/halloween/pc/37a4368021c711ec908525a2b2d5a2e9.png';
import img11 from 'resources/images/activities/halloween/pc/3484f52021c711ecb974edc5b199b475.png';
import img12 from 'resources/images/activities/halloween/pc/353f447021c711ecb0c73fe9fe75da97.png';
import img13 from 'resources/images/activities/halloween/pc/363675b021c711ec82a035c2fc5428cb.png';
import img14 from 'resources/images/activities/halloween/pc/35fdb27021c711ecb9a84d1032b79016.png';
import img15 from 'resources/images/activities/halloween/pc/35d542e021c711ec8fb1573d2b0c245d.png';
import img16 from 'resources/images/activities/halloween/pc/35a691c021c711ecbd224f579ef19aa8.png';
import img17 from 'resources/images/activities/halloween/pc/356bf9c021c711ec8eb2a5008967f062.png';
import img18 from 'resources/images/activities/halloween/pc/350521a021c711eca78d0907794f3ea9.png';
import img19 from 'resources/images/activities/halloween/pc/34cb9b1021c711ec908525a2b2d5a2e9.png';
import img20 from 'resources/images/activities/halloween/pc/33cffd0021c711ec8fb1573d2b0c245d.png';
import img21 from 'resources/images/activities/halloween/pc/37432ac021c711ec8514fdd285ce2e11.png';
import img22 from 'resources/images/activities/halloween/pc/386b08f021c711ecb9a84d1032b79016.png';
import img23 from 'resources/images/activities/halloween/pc/38b04f5021c711ecb974edc5b199b475.png';
import img24 from 'resources/images/activities/halloween/pc/38d9d05021c711eca4909541617492c8.png';
import img25 from 'resources/images/activities/halloween/pc/3905c25021c711ecaba163cb66251cf6.png';
import img26 from 'resources/images/activities/halloween/pc/39370b8021c711ecb84a8bb4c9fb1a35.png';
import img27 from 'resources/images/activities/halloween/pc/39759b2021c711ec8eb2a5008967f062.png';
import img28 from 'resources/images/activities/halloween/pc/39a6e45021c711ecb0c73fe9fe75da97.png';
import img29 from 'resources/images/activities/halloween/pc/39d6f50021c711ec82a035c2fc5428cb.png';
import img30 from 'resources/images/activities/halloween/pc/3eb7475021c711eca78d0907794f3ea9.png';
import styles from './style.responsive.css';

const Index = () => {
  return (
    <div className={styles.mod}>
      <div className={styles.containerInner}>
        <img className={styles.banner} src={img1} />
        <div className={styles.floorBgWrapper} style={{ backgroundImage: `url(${img2})` }}>
          <img className={styles.floorBg} src={img3} />
        </div>
        <div className={styles.wrapper} style={{ backgroundImage: `url(${img4})` }}>
          <div className={styles.wrapperInner}>
            <img className={styles.cover} src={img5} />
            <div className={styles.group} style={{ backgroundImage: `url(${img6})` }}>
              <img className={styles.longBg} src={img7} />
              <img className={styles.bg} src={img8} />
              <img className={styles.background} src={img9} />
              <img className={styles.bg1} src={img10} />
            </div>
          </div>
          <div className={styles.wrapperInner1} style={{ backgroundImage: `url(${img11})` }}>
            <div className={styles.group1} style={{ backgroundImage: `url(${img12})` }}>
              <div className={styles.view}>
                <img className={styles.actionBg} src={img13} />
                <img className={styles.buttonBg} src={img14} />
              </div>
              <div className={styles.view1}>
                <img className={styles.background1} src={img15} />
                <img className={styles.actionBg1} src={img16} />
                <img className={styles.bg2} src={img17} />
              </div>
            </div>
            <img className={styles.item} src={img18} />
            <img className={styles.buttonBg1} src={img19} />
          </div>
          <img className={styles.banner1} src={img20} />
        </div>
        <img className={styles.bar} src={img21} />
        <img className={styles.actionBg2} src={img22} />
        <div className={styles.layerWrapper}>
          <img className={styles.layer} src={img23} />
          <img className={styles.background2} src={img24} />
          <img className={styles.bg3} src={img25} />
          <img className={styles.background3} src={img26} />
          <img className={styles.product} src={img27} />
          <img className={styles.iconAdd} src={img28} />
          <img className={styles.item1} src={img29} />
        </div>
        <img className={styles.cover1} src={img30} />
      </div>
    </div>
  );
};
export default Index;
