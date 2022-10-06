import Component from '../../BaseComponent';
import {translate as t} from '../../translations/Translation';
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
}