import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MapWithSearch from '../map-with-search';
import helpers from '../../helpers';

const useStyles = makeStyles({
  aboutpage: {
    display: 'flex',
    justifyContent: 'center'
  }
});

function About(props) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.aboutpage}>
        <Typography>
          <Helmet>
            <title>{props.t('auth.about-page')}</title>
          </Helmet>
          <p>{props.t('auth.about-page')}</p>
          <Link to="/" variant="body2">
            Home
          </Link>
        </Typography>
      </Container>
      <MapWithSearch search />
    </>
  );
}

export default helpers(['t'])(About);
