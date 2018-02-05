import React from 'react';
import Paper from 'material-ui/Paper';
// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FileFolder from 'material-ui/svg-icons/file/folder';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const style = {
  height: 630,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class SideBar extends React.Component {
  render() {
    return (
      <Paper style={style} zDepth={3}>
        <Router>
          <div>
            <List>
              <Subheader> <h2> Administrator</h2></Subheader>
              <Avatar style={{ width: '150', height: '150' }} src={'https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'} />
              <Link to='/profile'><ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="Profile"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
                }
              /></Link>
              <Link to='/allpost'> <ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="Home"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>}
              /></Link>
              <Link to='/yourpost'><ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="Your Post"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>}
              /></Link>
              <Link to='/createpost'><ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="Create Post"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>}
              /></Link>
              <Link to='/allstudent'><ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="All Student"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>}
              /></Link>
              <Link to='/allcompany'><ListItem
                onClick={() => { this.props.handleClose(); }}
                primaryText="All Company"
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>}
              /></Link>
            </List>



          </div>
        </Router>

      </Paper>
    );
  }

}
export default SideBar;