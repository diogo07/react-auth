import { Container, Typography, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { fetchLoading } from '../../actions/general/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const INITIAL_STATE = {
}


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    async componentDidMount() {

    }


    render() {
        return <Container>
            <div style={{ height: '80px', width: '100%' }}></div>
            <Grid container>
                

            </Grid>
        </Container>
    }
}


const mapStateToProps = state => ({  });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchLoading }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
