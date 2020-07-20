import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Icon from './components/core/Icon';
const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }
  render() {
    return (
      <div>
        <Person />
        <HeartRate heart={MIN_HEART} />
        <div className='water'>{this.state.water}</div>
      </div>
    );
  }
}
export default App;
