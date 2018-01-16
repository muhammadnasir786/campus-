import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';


const style = {
    color: 'red',
    fontWeight: 'bold'
}
const cardStyle = {
    margin: 25,
    padding: 0,
    border: '2px solid brown',
    fontSize : 16,
    fontWeight : 'normal'
}
class OneProfile extends React.Component {

    render() {
        let user = this.props.user;
        // console.log(user.userPhotoURL)
    
        return user ?  (
            <Card style={cardStyle}>
                         <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={<Avatar src={'https://pickaface.net/gallery/avatar/nadinesomrita52e59e23695c7.png'} />}
                                >
                                <p style={{ fontSize : 25  , marginBottom : -15 , marginTop : -5}}>{user.name}</p>
                         </ListItem>
                        </List>
                        <hr/>
                <p>Email = <span>{user.email}</span></p>
                <p>Role = <span>{user.role}</span></p>
                <p>University = <span>{user.uni}</span></p>
                <p>Phone Number = <span>{user.phone}</span></p>
                <p>Country = <span>{user.country}</span></p>
                <p>City = <span>{user.city}</span></p>
                <p>Matric % = <span>{user.matricPer}</span></p>
                <p>Matric Grade = <span>{user.matricGrade}</span></p>
                <p>Inter % = <span>{user.matricPer}</span></p>
                <p>Inter Grade = <span>{user.matricGrade}</span></p>
            </Card>
        ) : null
    }
}

export default OneProfile;