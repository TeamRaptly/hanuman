import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import helpers from '../../helpers';
import App from '../App';
import { fetchResources } from '../../actions/resources-action-creators';
import ImageData from '../../utils/imageData';

const useStyles = (theme) => ({
  breakpoint: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '300px'
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '400px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '450px'
    }
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  // TODO: remove me
  // Used to see how dynamic resource fetching should work
  // componentDidMount() {
  // console.log('Component did mount called...and resource fetch started');
  // this.props.fetchResources({ resources: ['facts'], dependencies: 'abc' });
  // }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          <title> {this.props.t('dashboard')}</title>
        </Helmet>
        <Grid container justify="center">
          {ImageData.map((tile) => (
            <Grid item xs={12} sm={6} md={6}>
              <Button component={RouterLink} to="/about">
                <img
                  src={tile.img}
                  alt="about page link"
                  className={classes.breakpoint}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
        <p>Home Page - {this.props.t('welcome')}</p>
        <div>All the configs available: {JSON.stringify(this.props.c())}</div>
        <App />
      </>
    );
  }
}

export default withStyles(useStyles)(
  connect(null, { fetchResources })(helpers(['c', 't'])(Home))
);
