import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import * as firebase from "firebase";
import CRSAction from '../../store/actions/CRSAction'
const style = {
    height: 830,
    width: 630,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
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
    componentDidMount(){
        
    }

    componentWillReceiveProps(nextProps){
        // get new props and set state({  })
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
        })
       
    }
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>
                <CardTitle title="Profile" subtitle="View OR Update Your Profile" />
                </h1>
                <Paper  style={style} zDepth={3}>
                <div>
                {this.props.role === 'student' ? 
                    <div>
                        <h3>For Student</h3>
                            <div>
                                <Card style={{ border: '1px solid brown' , margin : 20 , marginTop : '-20' }}>
                                    <br />
                                    <CardTitle title="Register Your Account as a Student" subtitle="SignUp Here !" />
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
                                    <h2>Marks Details</h2>
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
                                        <RaisedButton label="Cancel" style={{ margin : 12}}
                                            onClick={this.props.cancel}
                                        />
                                        <RaisedButton label={this.state.isEdit ? 'Edit' : 'Update Profile'}
                                            onClick={() => {
                                                if(this.state.isEdit){
                                                    
                                                    this.setState({isEdit : !this.state.isEdit})
                                                }else{
                                                    console.log('Done 167')                                                    
                                                    let profileData = {
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
                    {this.props.role === 'company' ? <div>
                        <h3>For Company</h3>
                            <div>
                                <Card style={{ border: '2px solid brown' , margin : 20 }}>
                                    <br />
                                    <CardTitle title="SignUp as a Company" subtitle="SignUp Here !" />
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
                                        <RaisedButton label="Cancel" style={{margin : 12}}
                                            onClick={this.props.cancel}
                                            />
                                        <RaisedButton label={this.state.isEdit ?'Edit' : 'Update Profile'}
                                            onClick={() => {
                                                if(this.state.isEdit){
                                                
                                                    this.setState({isEdit : !this.state.isEdit})
                                                }else{
                                                    
                                                    let profileData = {
                                                        name: this.state.name,
                                                        age: this.state.age,
                                                        phone: this.state.phone,
                                                        uni : this.state.uni,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        role: this.state.role,
                                                        city : this.state.city,
                                                        country : this.state.country
                                                        
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
                    </div> : null}
                </div>

                </Paper>
            </div>
        );
    }
}
 let mapStateToProps = (state)=>{
     return {
        user : state.CRSReducer.allUsers[firebase.auth().currentUser.uid],
        role : state.CRSReducer.role
     }
 }
 let mapDispatchToProps = (dispatch)=>{
    return {
        updateProfile : (data)=>{ dispatch(CRSAction.updateProfile(data))}
    }   
}
// export default Profile;
export default connect(mapStateToProps, mapDispatchToProps)(Profile)