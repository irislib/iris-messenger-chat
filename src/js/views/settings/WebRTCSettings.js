import Component from '../../BaseComponent';
import {translate as t} from '../../translations/Translation';

import State from 'iris-lib/src/State';
import {setRTCConfig, getRTCConfig, DEFAULT_RTC_CONFIG} from '../../components/VideoCall';
import Notifications from 'iris-lib/src/Notifications';
import $ from 'jquery';
import Button from '../../components/basic/Button';

export default class WebRTCSettings extends Component {

  render() {
    return (
        <>
          <div class="centered-container">
            <h3>{t('webrtc_connection_options')}</h3>
            <p><small>{t('webrtc_info')}</small></p>
            
          </div>
        </>
    );
  }

  componentDidMount() {
    
  }

  rtcConfigChanged(e) {

  }

  restoreDefaultRtcConfig() {

  }
}