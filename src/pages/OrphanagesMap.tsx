import React from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){

  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
      navigation.navigate('OrphanageDetails');
  }

    return (

        <View style={styles.container}>
        <MapView 
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -23.5874113,
            longitude:  -46.6598276,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
  
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 3.2,
              y: 0.8,
            }}
            coordinate={{
              latitude: -23.5874113,
              longitude:  -46.6598276,
            }}
          >
  
          <Callout tooltip={true} onPress={() => {handleNavigateToOrphanageDetails()}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout> 
  
          </Marker>
        </MapView>
  
        <View style={styles.footer}>
            <Text style={styles.footerText}>
              2 orfanatos encontrados
            </Text>
  
            <TouchableOpacity style={styles.createOrphanageButton}>
              <Feather name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: ' Nunito_700Bold',

  },

  footer: {
    position: 'absolute',
    left: 24,
    bottom: 32,
    right: 24,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3, 
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: ' Nunito_700Bold',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
