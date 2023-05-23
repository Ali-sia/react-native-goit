import React, { useState, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function Map({ route }) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if (route.params) {
      setLocation(route.params);
    }
  }, [route.params]);

  const { latitude, longitude } = location;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="travel Photo"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
