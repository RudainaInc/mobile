
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './AppContent/home.js'
import ProfileScreen from './AppContent/profile.js'
import DocScrren from './AppContent/doc';
import TrackerScreen from './AppContent/tracker';
import GameScreen from './AppContent/game';
import GuestScreen from './AppContent/guestUser';

const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Doc: { screen: DocScrren },
    Tracker: {screen: TrackerScreen},
    Game: {screen: GameScreen},
    Guest: {screen: GuestScreen}
});

export default App;
