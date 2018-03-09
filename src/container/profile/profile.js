import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import * as firebase from "firebase";
import CRSAction from '../../store/actions/CRSAction'
const style = {
    // height: 830,
    // width: 630,
    margin: 20,
    // textAlign: 'center',
    // display: 'inline-block',
};


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            phone: '',
            uni : '',
            email: '',
            password: '',
            role: '',
            matricPer : '',
            matricGrade : '',
            interGrade : '',
            interPer : '',
            city : '',
            country : '',
            isEdit : true // bhai ye Ulta use kia he
        }
     
    }
    componentWillMount(){
    //    this.props.user !== undefined ? 
    //     this.setState({
    //         name: this.props.user.name,
    //         phone: this.props.user.phone,
    //         uni : this.props.user.uni,
    //         email: this.props.user.email,
    //         password: this.props.user.password,
    //         role: this.props.user.role,
    //         matricPer : this.props.user.matricPer,
    //         matricGrade : this.props.user.matricGrade,
    //         interGrade : this.props.user.interGrade,
    //         interPer : this.props.user.interPer,
    //         city : this.props.user.city,
    //         country : this.props.user.country,
    //     }) : null
    }

    componentWillReceiveProps(nextProps){
        // get new props and set state({  })
        // console.log(nextProps);
        nextProps.user !== undefined ? 
        this.setState({
                name: nextProps.user.name,
                phone: nextProps.user.phone,
                uni : nextProps.user.uni,
                email: nextProps.user.email,
                password: nextProps.user.password,
                role: nextProps.user.role,
                matricPer : nextProps.user.matricPer,
                matricGrade : nextProps.user.matricGrade,
                interGrade : nextProps.user.interGrade,
                interPer : nextProps.user.interPer,
                city : nextProps.user.city,
                country : nextProps.user.country,
            }) : null
            console.log(this.props.user);
            
        }
        render() {
            // console.log(firebase.auth().currentUser.uid);
        console.log(this.props.user)
        return (
            <Card style={style}>
                
                    <CardTitle title="Profile" subtitle="View OR Update Your Profile" />
                
                <Card>
                <div>
                {this.props.role === 'student' ? 
                    <div>
                     
                            <div>
                                <Card style={{ border: '1px solid gray' , margin : 20 , marginTop : '-20' }}>
                                    <br />
                                    <CardTitle title="Student" subtitle="You can Edit OR Update Your Profile  !" />
                                    <br />
                                    <TextField
                                        disabled={this.state.isEdit}
                                        floatingLabelText="Full Name"
                                        value={this.state.name}
                                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                                    />
                                    <TextField
                                        floatingLabelText="Country"
                                        disabled={this.state.isEdit}
                                        value={this.state.country}
                                        onChange={(e) => { this.setState({ country: e.target.value }) }}
                                    /><br />
                                    <TextField
                                        floatingLabelText="City"
                                        value={this.state.city}
                                        disabled={this.state.isEdit}
                                        onChange={(e) => { this.setState({ city: e.target.value }) }}
                                    /><TextField
                                    floatingLabelText="phone"
                                        disabled={this.state.isEdit}
                                        value={this.state.phone}
                                    onChange={(e) => { this.setState({ phone: e.target.value }) }}
                                    /><br/>
                                    <TextField
                                        disabled={this.state.isEdit}
                                        value={this.state.uni}
                                        floatingLabelText="College/ University"
                                        fullWidth={false}
                                        onChange={(e) => { this.setState({ uni : e.target.value }) }}
                                    /><br />
                                    
                                    <TextField
                                        disabled
                                        floatingLabelText='Email'
                                        value={this.state.email}
                                        type='email'
                                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                                    />
                                    <TextField
                                        disabled={true}
                                        floatingLabelText='Password'
                                        value={this.state.password}
                                        type='password'
                                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                                    /><br />

                                    <br />
                                    <CardTitle title="Marks Details"></CardTitle>
                                    <TextField
                                        floatingLabelText='Matric Percentage'
                                        value={this.state.matricPer}
                                        disabled={this.state.isEdit}
                                        type='text'
                                        onChange={(e) => { this.setState({ matricPer: e.target.value }) }}
                                    />
                                    <TextField
                                        disabled={this.state.isEdit}
                                        floatingLabelText='Matric Grade'
                                        value={this.state.matricGrade}
                                        type='text'
                                        onChange={(e) => { this.setState({ matricGrade: e.target.value }) }}
                                    /><br />
                                    <TextField
                                        disabled={this.state.isEdit}
                                        floatingLabelText='Inter Percentage'
                                        value={this.state.interPer}
                                        type='text'
                                        onChange={(e) => { this.setState({ interPer: e.target.value }) }}
                                    />
                                    <TextField
                                        floatingLabelText='Inter Percentage'
                                        value={this.state.interGrade}
                                        disabled={this.state.isEdit}
                                        type='text'
                                        onChange={(e) => { this.setState({ interGrade: e.target.value }) }}
                                    /><br />


                                    <CardActions>
                                        <RaisedButton label={this.state.isEdit ? 'Edit' : 'Update Profile'}
                                            onClick={() => {
                                                if(this.state.isEdit){
                                                    
                                                    this.setState({isEdit : !this.state.isEdit})
                                                }else{
                                                    // console.log('Done 167') 
                                                    let profileData
                                                    this.props.allUsers[firebase.auth().currentUser.uid].appliedPost !== undefined ?                                                   
                                                     profileData = {
                                                        name: this.state.name,
                                                        phone: this.state.phone,
                                                        uni : this.state.uni,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        role: this.state.role,
                                                        matricPer : this.state.matricPer,
                                                        matricGrade : this.state.matricGrade,
                                                        interGrade : this.state.interGrade,
                                                        interPer : this.state.interPer,
                                                        city : this.state.city,
                                                        country : this.state.country,
                                                        appliedPost : this.props.allUsers[firebase.auth().currentUser.uid].appliedPost

                                                    } :
                                                    profileData = {
                                                        name: this.state.name,
                                                        phone: this.state.phone,
                                                        uni : this.state.uni,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        role: this.state.role,
                                                        matricPer : this.state.matricPer,
                                                        matricGrade : this.state.matricGrade,
                                                        interGrade : this.state.interGrade,
                                                        interPer : this.state.interPer,
                                                        city : this.state.city,
                                                        country : this.state.country
                                                    } 

                                                    this.props.updateProfile(profileData)
                                                    // update profile here 
                                                    this.setState({isEdit : !this.state.isEdit})

                                            }
                                        }
                                            
                                            }
                                            secondary={true} style={{margin : 12}} />
                                    </CardActions>
                                </Card>
                            </div>
                    </div> : null}
                    {this.props.role !== 'student' ? 
                    <Card style={{ border : '1px solid gray'}} zDepth={3}>
                    
                            <div>
                                <Card style={{}}>
                                    <br />
                                    <CardTitle title="Company" subtitle="You can Edit OR Update Your Profile  !" />
                                    <br />
                                    <TextField
                                        value={this.state.name}
                                        disabled={this.state.isEdit}
                                        floatingLabelText="Company Name"
                                        onChange={(e) => { this.setState({ name: e.target.value }) }}
                                        />
                                    <TextField
                                    value={this.state.country}
                                        floatingLabelText="Country"
                                        disabled={this.state.isEdit}
                                        onChange={(e) => { this.setState({ country: e.target.value }) }}
                                        /><br />
                                    <TextField
                                        value={this.state.city}
                                        disabled={this.state.isEdit}
                                        floatingLabelText="City"
                                        onChange={(e) => { this.setState({ city: e.target.value }) }}
                                        /><TextField
                                        value={this.state.phone}
                                        disabled={this.state.isEdit}
                                        floatingLabelText="phone"
                                        onChange={(e) => { this.setState({ phone: e.target.value }) }}
                                        /><br/>
                                    <TextField
                                        disabled={true}
                                        floatingLabelText='Email'
                                        value={this.state.email}
                                        type='email'
                                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                                        /><br/>
                                    <TextField
                                        floatingLabelText='Password'
                                        disabled={true}
                                        value={this.state.password}
                                        type='password'
                                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                                        /><br/>



                                    <CardActions>
                                        <RaisedButton label={this.state.isEdit ?'Edit' : 'Update Profile'}
                                            onClick={() => {
                                                if(this.state.isEdit){
                                                    alert('asdas')
                                                
                                                    this.setState({isEdit : !this.state.isEdit})
                                                }else{
                                                    alert('asdasd')
                                                    console.log(this.props.allUsers[firebase.auth().currentUser.uid].appliedPost);
                                                    let profileData
                                                    this.props.allUsers[firebase.auth().currentUser.uid].appliedPost !== undefined ?
                                                     profileData = {
                                                        name: this.state.name,
                                                        age: this.state.age,
                                                        phone: this.state.phone,
                                                        uni : this.state.uni,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        role: this.state.role,
                                                        city : this.state.city,
                                                        country : this.state.country,
                                                        appliedPost : this.props.allUsers[firebase.auth().currentUser.uid].appliedPost
                                                    } : 
                                                    profileData = {
                                                        name: this.state.name,
                                                        age: this.state.age,
                                                        phone: this.state.phone,
                                                        uni : this.state.uni,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        role: this.state.role,
                                                        city : this.state.city,
                                                        country : this.state.country,
                                                    } 

                                                    console.log('done')
                                                    // update Profile eher
                                                    this.setState({isEdit : !this.state.isEdit})
                                                    this.props.updateProfile(profileData)
                                                }
                                            }
                                            
                                        }
                                        secondary={true} style={{margin : 12}} />
                                    </CardActions>
                                </Card>
                            </div>
                    </Card> : null}
                </div>

                </Card>
            </Card>
        );
    }
}
 let mapStateToProps = (state)=>{
     return {
        user : state.CRSReducer.allUsers[firebase.auth().currentUser.uid],
        role : state.CRSReducer.role,
        allUsers : state.CRSReducer.allUsers
     }
 }
 let mapDispatchToProps = (dispatch)=>{
    return {
        updateProfile : (data)=>{ dispatch(CRSAction.updateProfile(data))}
    }   
}
// export default Profile;
export default connect(mapStateToProps, mapDispatchToProps)(Profile)