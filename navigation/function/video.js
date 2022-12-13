import { Camera, CameraType } from 'expo-camera';
import { Video } from 'expo-av';
import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Dimensions, TouchableOpacity} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCamera, faCameraRotate, faRecordVinyl,faBolt} from "@fortawesome/free-solid-svg-icons";
import * as MediaLibrary from 'expo-media-library';
import {ShareAsync} from 'expo-sharing';


export default function VideoScreen() {

  {/* Get Permission */}
  {/* Set Status whether there is boolean option */}
  let cameraReference = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [CameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
  const [MicrophonePermission, requestMicrophonePermission] = Camera.useMicrophonePermissions();
  const [MediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const [startRecording,setStartRecording] = useState(false);
  const [photopicture,setPhotopicture]= useState(false);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
{/*useEffect(() => {
  (async () => {
    const 
  })();
},[]);*/}
  
  {/*const [permission, requestpermission] = Camera.wq();*/}
  {/* Condition Start */}
  if (!CameraPermission) {
    return <View />;
  }

  if (!CameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center'}}>We need your permission to open the camera</Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }
  {/* Follow Action */}
  {/*if(MicrophonePermission){
    return(
      <View></View>
    )
  }
  if(!MicrophonePermission.granted){
    return(
       <View style={styles.container}>
        <Text style={{ textAlign: 'center'}}>We need your permission to open the Microphone</Text>
        <Button onPress={requestMicrophonePermission} title="grant permission" />
      </View>
    )
  }
  */}
  {/* Condition End */}
  

  {/* Function Start */}
 
  const toggle =() => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const takephoto =  async() => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };
    let newimage = await cameraReference.current.takePictureAsync(options);
    setImage(newimage);
  }

  if(image){
    let photosave = async() =>{
       await MediaLibrary.createAssetAsync(newImage);
       setImage(null)
      ;}
    let photoshare = () => {
      Sharing.shareAsync(photo.uri).then(() => {
        setImage(undefined);
    })
    }
    let photodiscard = () => {

    }

    return (
      <Camera ref={Camera}>
{MediaLibraryPermission ? <Button title="Save" onPress={photosave}></Button>: undefined}
        <Button title="Share" onPress={photoshare}></Button>
        <Button title="Discard" onPress={photodiscard}></Button>
      </Camera>

    )
    }

  const recordvideo = () => {   
    let videoquality = {
      quality: "1080p",
      maxDuration: 3600,
      mute: false
    };

    cameraReference.current.recordAsync(videoquality).then((recordedVideo) => {
      setVideo(recordedVideo);
      setStartRecording(false);
    })
  }
  const stopRecording = () => {
      setStartRecording(false);
      cameraReference.current.stopRecording();
  };
  if(video){
  
  let videosave = () => {
    MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
      setVideo(undefined);
    });
  };

  let videoshare = () => {
    Sharing.shareAsync(video.uri).then(() => {
      setVideo(undefined);
    })
  };
  let videodiscard = () => {
    setVideo(undefined);
  };

  return (
    <Camera ref={cameraReference}>
      {MediaLibraryPermission ?<Button title="Save" onPress={videosave}></Button>: undefined}
      <Button title="Share" onPress={videoshare} />
      <Button title="Discard" onPress={videodiscard} />
      </Camera>
  );
  }
  

  {/* Function End */}
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
           {/*Filp button */}
          <TouchableOpacity style={styles.button} onPress={toggle}>
            <FontAwesomeIcon icon={faCameraRotate} style={{fontSize: 32}} />
          </TouchableOpacity>
           {/*Capture button  */}
          <TouchableOpacity style={styles.button} onPress={takephoto}>
            <FontAwesomeIcon icon={faCamera} style={{fontSize: 32}} />
          </TouchableOpacity>
          {/* record button */}
          <TouchableOpacity style={styles.button} onPress={recordvideo}>
            <FontAwesomeIcon icon={faRecordVinyl} style={{fontSize: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>

          </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
  
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ff0ff0'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    flexDirection: 'wrap'
  },

})