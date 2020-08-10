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
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true,   
        // uncomment this line if you want to stop funct after capture  
        // pauseAfterCapture: true,
        orientation : 'portrait',
        forceUpOrientation: true
                 };
      const data = await this.camera.takePictureAsync(options);
      console.log("data.uri: ",data.uri);
    }
  };


  render() {
    return (
      <View style={{flex:1,backgroundColor:'lightblue'}} >
        <Text> App </Text>
        <RNCamera
        style={ {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        autoFocus="on"
        captureAudio={false}
        ref={ref => {
          this.camera = ref;
        }}
        fixOrientation={true}
        faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        type={RNCamera.Constants.Type.back}
        
        onFacesDetected={face => {
          console.log("onFacesDetected :",face);
          
          if(this.state.fd ){
              this.setState({fd: face.faces.length === 0})
              alert(JSON.stringify(face))
              this.takePicture()
          }
        }}
        />
      </View>
    );
  }
}
