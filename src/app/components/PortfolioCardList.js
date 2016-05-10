import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import PortfolioCard from './PortfolioCard';

const styles = {
  portfolioCardList: {
    maxWidth: '344px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const personalProjectsData = [
  {
    headerTitle: 'Impulse',
    headerSubtitle: 'Android Application',
    headerAvatar: 'images/impulse/ic_impulse.png',
    image: 'images/impulse/card_hero_impulse.png',
    text: 'Impulse helps you discover spontaneous activties with your friends and people nearby.'
  },
  {
    headerTitle: 'Still Alive',
    headerSubtitle: 'Android Application',
    headerAvatar: 'images/still-alive/ic_still_alive.png',
    image: 'images/still-alive/card_hero_still_alive.png',
    text: 'Still Alive lets the people you care about know you\'re not dead.'
  }
];

const hackathonProjectsData = [
  {
    headerTitle: 'Entangled',
    headerSubtitle: 'Android Watch Face',
    headerAvatar: 'images/entangled/ic_entangled.png',
    image: 'images/entangled/card_hero_entangled.png',
    text: 'Entangled is the first Android watch face that passively solves the problem of loneliness.'
  },
  {
    headerTitle: 'fliiip',
    headerSubtitle: 'Android Application',
    headerAvatar: 'images/fliiip/ic_fliiip.png',
    image: 'images/fliiip/card_hero_fliiip.png',
    text: 'fliiip solves the paradox of choice when deciding what to eat by giving you 3 places to pick from.'
  }
];

const workProjectsData = [
  {
    headerTitle: 'ScreenPop Lockscreen Messenger',
    headerSubtitle: 'Android Application',
    headerAvatar: 'images/screenpop/ic_screenpop.png',
    image: 'images/screenpop/card_hero_screenpop.png',
    text: 'ScreenPop lets you easily access the camera from the lock screen so you can take a picture and send it to your friend\'s lock screen.'
  },
  {
    headerTitle: 'Locket Lock Screen',
    headerSubtitle: 'Android Application',
    headerAvatar: 'images/locket/ic_locket.png',
    image: 'images/locket/card_hero_locket.png',
    text: 'Selected as one of the "Best Apps of 2014" by Google, Locket is the intelligent lock screen that brings you the top stories every time you wake up your phone.'
  }
];

class PortfolioCardList extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {
    return (
      <List style={styles.portfolioCardList}>

      <Subheader>Personal Projects</Subheader>
      
      {personalProjectsData.map((card) => (
        <PortfolioCard
          headerTitle={card.headerTitle}
          headerSubtitle={card.headerSubtitle}
          headerAvatar={card.headerAvatar}
          image={card.image}
          text={card.text}
        />
      ))}

      <Subheader>Hackathon Projects</Subheader>
      
      {hackathonProjectsData.map((card) => (
        <PortfolioCard
          headerTitle={card.headerTitle}
          headerSubtitle={card.headerSubtitle}
          headerAvatar={card.headerAvatar}
          image={card.image}
          text={card.text}
        />
      ))}

      <Subheader>Work Projects</Subheader>
      
      {workProjectsData.map((card) => (
        <PortfolioCard
          headerTitle={card.headerTitle}
          headerSubtitle={card.headerSubtitle}
          headerAvatar={card.headerAvatar}
          image={card.image}
          text={card.text}
        />
      ))}

      </List>
    );
  }
}

export default PortfolioCardList;