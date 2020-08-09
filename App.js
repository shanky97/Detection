import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fd:true
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'lightblue'}} >
        <Text> App </Text>
        <RNCamera
        style={StyleSheet.absoluteFill}
        faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        onFacesDetected={face => {
          console.log("onFacesDetected :",face);
          
          if(this.state.fd){
              this.setState({fd: face.faces.length === 0})
              alert(JSON.stringify(face))
          }
        }}
        />
      </View>
    );
  }
}
