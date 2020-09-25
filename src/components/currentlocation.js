import React from 'react';

const mapStyles = {
  map: {
    position: 'relative',
    width: '100%',
    height: '500px'
  }
};

export default class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
<<<<<<< HEAD
        lat,
        lng
=======
        lat: lat,
        lng: lng
>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given
      }
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { coords } = pos;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const { map } = this;
    const current = this.state.currentLocation;

    const { google } = this.props;
    const { maps } = google;

    if (map) {
      const center = new maps.LatLng(current.lat, current.lng);
=======
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given
      map.panTo(center);
    }
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given
  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
<<<<<<< HEAD
      const { maps } = google;
=======
      const maps = google.maps;
>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given

      // reference to the actual DOM element
      const node = this.mapRef.current;

<<<<<<< HEAD
      const { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = {
        center,
        zoom
      };
=======
      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return null;

    return React.Children.map(children, (c) => {
      if (!c) return null;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
<<<<<<< HEAD
    const style = { ...mapStyles.map };
=======
    const style = Object.assign({}, mapStyles.map);
>>>>>>> f7bfe8d... creating sign-in-up with mobile otp pages and changes in burger menu according to scenario given
    return (
      <div>
        <div style={style} ref={this.mapRef}>
          Loading map...
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};
