import React from 'react';
import { StyleSheet, Text, textarea, CheckBox, Button, TouchableOpacity, View } from 'react-native';
import { Image, TextInput } from 'react-native-web';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View>
        <Text style={styles.heading}>
        <h1>Welcome Back</h1>
          </Text>
        </View>
        <View>
          <Text style={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, send faci;isi et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, send faci;isi etc.
          </Text>
        </View><br></br>
        <View>
          <Text style={{
            flex: 1, flexDirection: "column", marginLeft: 30
}}>
          <TextInput style=
              {{
                borderRadius: 10,backgroundColor: '#dcdcdc', borderColor:'#dcdcdc',width:430,
                height: 50,
                margin:5,
                shadowOpacity: 0.45,
               padding:8}}placeholder='Username, Email & Phone Number'
              ></TextInput>
      
            <TextInput style={{ borderRadius: 10, backgroundColor: '#dcdcdc', 
              borderColor: '#dcdcdc',
              width: 430, height: 50, margin: 5,
             padding: 8 }}
  
          placeholder='Password'
              secureTextEntry={true}
              />
          </Text>
          <Text style={{ textAlign: 'right', paddingRight: 30, fontStyle: 'bold' }}><h4>Forgot Password?</h4>
          </Text>
          <View style={{
            width: 440,
             
            padding: 8, 
           marginLeft: 30, }}>
            <Button title="SIGN IN" color="#f08080" />
          </View>
         
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'pink', height: 1, flex: 1, alignSelf: 'center' }} />
          <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 16 }}>Or Sign up With</Text>
          <View style={{ backgroundColor: 'pink', height: 0.5, flex: 1, alignSelf: 'center' }} />
        </View>
        <br></br>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ margin: '10px</TouchableOpacity>' }}>
          <Image source={{ uri:require('./imgs/google.png') }} style={{ height: '40px', width: '40px' }}/>
            </TouchableOpacity>
          <TouchableOpacity style={{ margin: '10px</TouchableOpacity>' }}>
            <Image source={{ uri: require('./imgs/facebook.png') }} style={{ height: '40px', width: '40px' }} /></TouchableOpacity>
            <TouchableOpacity style={{ margin: '10px</TouchableOpacity>' }}>
              <Image source={{ uri: require('./imgs/apple.png') }} style={{ height: '40px', width: '40px' }} />
       
          </TouchableOpacity>
        </View>
        </View>
        );
  };
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
   
    alignItems: 'center',
    justifyContent: 'top',
},

name:{
  shadowColor:'#000',
  shadowOpacity: 0.25,
},
  text: {
    // color: '',
    // fontFamily: 'bold',
    fontSize: 18,
    // paddingLeft:80,
  textAlign: 'center',
    marginLeft: 25,
   },
   checkboxContainer: {
     flexDirection: "row",
     marginBottom: 10,
   },
  
  label: {
  margin: 8,
  },
 
   
});


