import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import helpers from '../../helpers';
import { fetchResources } from '../../actions/resources-action-creators';

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
class Shopping extends React.Component {


  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          Shopping
        </Helmet>

        <div>More info on {this.props.t('shopping')}</div>
      </>
    );
  }
}

export default withStyles(useStyles)(
  connect(null, { fetchResources })(helpers(['c', 't'])(Shopping))
);
