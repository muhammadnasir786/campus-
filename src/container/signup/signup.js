import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './signup.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import AuthAction from "../../store/actions/authAction";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const style = {
    margin: 10,
};

let mapStateToProps = (state) => {
    return {
        state: state

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        creataUser: (data) => { dispatch(AuthAction.createUser(data)) },
        cancel: () => { dispatch(AuthAction.createUserSuccessfully()) }
    }
}
class RegisterCard extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            uni: '',
            email: '',
            password: '',
            role: '',
            matricPer: '',
            matricGrade: '',
            interGrade: '',
            interPer: '',
            city: '',
            country: ''
        }
    }
    render() {
        return (
            <div>


                <SelectField
                    style={{ width: 300 }}
                    value={this.state.role}
                    onChange={(e, i, v) => { this.setState({ role: v }) }}
                >
                    <MenuItem value='' disabled selected primaryText="SignUp as a Student / Company" />
                    <MenuItem value='student' primaryText="Login as a Student" />
                    <MenuItem value='company' primaryText="Login as Company" />
                </SelectField>
                <br />
                {/* for Student */}
                {this.state.role === 'student' ?
                    <div>
                        <Card style={{ margin : '50px' , border : '1px solid gray'}} zDepth={3}>
                            
                            <CardTitle title="Register Your Account as a Student" subtitle="SignUp Here !" />
                            <hr />
                            <TextField
                                floatingLabelText="Full Name"
                                value={this.state.name}
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                            />
                            <TextField
                                floatingLabelText="Country"
                                value={this.state.country}
                                onChange={(e) => { this.setState({ country: e.target.value }) }}
                            /><br />
                            <TextField
                                floatingLabelText="City"
                                value={this.state.city}
                                onChange={(e) => { this.setState({ city: e.target.value }) }}
                            /><TextField
                                floatingLabelText="phone"
                                value={this.state.phone}
                                onChange={(e) => { this.setState({ phone: e.target.value }) }}
                            /><br />
                            <TextField
                                value={this.state.uni}
                                floatingLabelText="College/ University"
                                onChange={(e) => { this.setState({ uni: e.target.value }) }}
                            /><br />

                            <TextField
                                floatingLabelText='Email'
                                value={this.state.email}
                                type='email'
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            />
                            <TextField
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
                                type='text'
                                onChange={(e) => { this.setState({ matricPer: e.target.value }) }}
                            />
                            <TextField
                                floatingLabelText='Matric Grade'
                                value={this.state.matricGrade}
                                type='text'
                                onChange={(e) => { this.setState({ matricGrade: e.target.value }) }}
                            /><br />
                            <TextField
                                floatingLabelText='Inter Percentage'
                                value={this.state.interPer}
                                type='text'
                                onChange={(e) => { this.setState({ interPer: e.target.value }) }}
                            />
                            <TextField
                                floatingLabelText='Inter Percentage'
                                value={this.state.interGrade}
                                type='text'
                                onChange={(e) => { this.setState({ interGrade: e.target.value }) }}
                            /><br />


                            <CardActions>
                                <RaisedButton label="Cancel" style={style}
                                    onClick={this.props.cancel}
                                />
                                <RaisedButton label="Register"
                                    onClick={() => {
                                        let user = {
                                            name: this.state.name,
                                            phone: this.state.phone,
                                            uni: this.state.uni,
                                            email: this.state.email,
                                            password: this.state.password,
                                            role: this.state.role,
                                            matricPer: this.state.matricPer,
                                            matricGrade: this.state.matricGrade,
                                            interGrade: this.state.interGrade,
                                            interPer: this.state.interPer,
                                            city: this.state.city,
                                            country: this.state.country

                                        }
                                        this.props.creataUser(user)
                                    }

                                    }
                                    secondary={true} style={style} />
                            </CardActions>
                        </Card>
                    </div> : null}


                {/* // for Company */}
                {this.state.role === 'company' ?
                    <div>
                        <Card style={{ }}>
                            <br />
                            <CardTitle title="SignUp as a Company" subtitle="SignUp Here !" />
                            <br />
                            <TextField
                                value={this.state.name}
                                floatingLabelText="Company Name"
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                            />
                            <TextField
                                value={this.state.country}
                                floatingLabelText="Country"
                                onChange={(e) => { this.setState({ country: e.target.value }) }}
                            /><br />
                            <TextField
                                value={this.state.city}
                                floatingLabelText="City"
                                onChange={(e) => { this.setState({ city: e.target.value }) }}
                            /><TextField
                                value={this.state.phone}
                                floatingLabelText="phone"
                                onChange={(e) => { this.setState({ phone: e.target.value }) }}
                            /><br />
                            <TextField
                                floatingLabelText='Email'
                                value={this.state.email}
                                type='email'
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            /><br />
                            <TextField
                                floatingLabelText='Password'
                                value={this.state.password}
                                type='password'
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            /><br />



                            <CardActions>
                                <RaisedButton label="Cancel" style={style}
                                    onClick={this.props.cancel}
                                />
                                <RaisedButton label="Register"
                                    onClick={() => {
                                        let user = {
                                            name: this.state.name,
                                            phone: this.state.phone,
                                            uni: this.state.uni,
                                            email: this.state.email,
                                            password: this.state.password,
                                            role: this.state.role,
                                            city: this.state.city,
                                            country: this.state.country

                                        }
                                        this.props.creataUser(user)
                                    }

                                    }
                                    secondary={true} style={style} />
                            </CardActions>
                        </Card>
                    </div> : null}
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCard);