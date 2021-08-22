import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login, signup, validateToken } from '../../actions/login/actions';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextInput from '../../components/textInput';
import { makeStyles } from "@material-ui/core/styles";


class LoginPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = "Página de Login";
        if (this.props.auth.user) {
           this.props.validateToken(this.props.auth.user.token)
        }
    }

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            return <Redirect to='/home'/>
        } else {
         
            const { handleSubmit } = this.props
            return (
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="sm" style={{height: '100vh', paddingTop: '200px'}}>
                        <form onSubmit={handleSubmit(v => this.onSubmit(v))} method='POST'>
                            <Field
                                component={TextInput}
                                type="text" 
                                name="login"
                                label="Login"
                                variant="outlined"
                                />

                            <Field
                                component={TextInput}
                                type="password" 
                                name="senha"
                                label="Senha"
                                variant="outlined" />
                            
                            <Button variant="contained" size="large" type="submit" fullWidth={true} >
                                ENTRAR
                            </Button>
                        </form>
                    </Container>
                </React.Fragment>
            )
        }
    }
}


LoginPage = reduxForm({ form: 'loginForm' })(LoginPage)
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup, validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)