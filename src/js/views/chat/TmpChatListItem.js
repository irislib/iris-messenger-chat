import Component from '../../BaseComponent';

export default class TmpChatListItem extends Component {
    constructor() {
      super();
      this.state = {latest: {}, unseen : {}};
    }
    render(){
        return(
            <div class="chat-item">
                <div class="tmpprofilephoto"></div>
                <div class="text">
                    <div class="tmpMsgSenderName"></div>
                </div>
            </div>
        );
    }
}