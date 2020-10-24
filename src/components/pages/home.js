import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import helpers from '../../helpers';
import { Helmet } from 'react-helmet';
import { fetchResources } from '../../actions/resources-action-creators';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
  breakpoint: {
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      height: "300px",
    },
    [theme.breakpoints.up('md')]: {
      width: "100%",
      height: "400px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "100%",
      height: "450px",
    }
  },
});

@withStyles(useStyles)
@connect(null, { fetchResources })
@helpers(['c', 't'])
export default class Home extends React.Component {
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
          <title> {this.props.t('dashboard').pageTitle}</title>
        </Helmet>

      </>
    );
  }
}
