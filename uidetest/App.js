/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomSheet from '@gorhom/bottom-sheet';

const App = () => {

  const [region, setRegion] = React.useState({
    latitude: 37.3318456, 
    longitude: -122.0296002,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [origin, setOrigin] = React.useState({latitude: 37.3318456, longitude: -122.0296002});
  const [destination, setDestination] = React.useState({latitude: 37.771707, longitude: -122.4053769});
  const [apiKey, setApikey] = React.useState("AIzaSyBlA7jBzn8ShpQVY1GT7GLKSsDxGFDj_V8");

  const [data, setData] = React.useState([
    {
      label: "Krani Pemesan",
      value: "Asisten Transport LIBT 1",
    },
    {
      label: "Waktu Tempuh",
      value: "18 Menit",
    },
    {
      label: "Tonnase",
      value: "9000",
    },
    {
      label: "Mill",
      value: "LIBM",
    },
    {
      label: "Divisi",
      value: "LIBE7",
    },
    {
      label: "Block",
      value: "E09",
    },
    {
      label: "Lokasi Bin Penuh",
      value: "",
    },
    {
      label: "Lokasi Bin Kosong",
      value: "E07/E08/Utara(North)/Utara(North)",
    },
  ])

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    console.log(region)
  }, [region])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{
        flex: 1,
        backgroundColor: '#363636',
      }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#363636',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <View style={{flex: 1, backgroundColor: 'blue'}}></View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white'}}>Peta untuk Sopir</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Text style={{color: 'white'}}>LIBT_BS46</Text>
            </View>
        </View>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{
          height: '100%',
          width: Dimensions.get('window').width
        }}
        initialRegion={region}
        region={region}
        showsUserLocation={true}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={apiKey}
            strokeWidth={3}
            strokeColor={'red'}
          />
          <Marker
            coordinate={origin}
          />
          <Marker
            coordinate={destination}
          />
        </MapView>

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column'
          }}>

            <View style={{
              flexDirection: 'row',
              backgroundColor: 'grey'
            }}>
              <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                flex: 2,
              }}>
                <Text>LIBT</Text>  
                <Text>08:00:00</Text>  
              </View>
              <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
              }}>
                <Text>→</Text>
              </View>
              <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                flex: 2,
              }}>
                <Text>E09</Text>  
                <Text>08:18:00</Text>  
              </View>
            </View>
              
              {
                data.map((item, index) => {
                  return(
                    <View style={{
                      paddingStart: 10,
                      paddingEnd: 10,
                      flexDirection: 'row',
                      backgroundColor: '#363636'
                    }}>
                      <View style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flex: 2,
                      }}>
                        <Text style={{color: 'white'}}>{item.label}</Text>
                      </View>
                      <View style={{
                        flexDirection: 'column',
                        flex: 1,
                      }}>
                        <Text style={{color: 'white'}}>: {item.value}</Text>
                      </View>
                    </View>
                  )
                })
              }

          </View>
        </BottomSheet>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
