import React from 'react'

import { StyleSheet, Image, Text, Button,View } from 'react-native';

const Intro = () => {
  return (
      <View style={{ alignItems: 'center', paddingTop: 100}}>
          <Image source={{ uri: require('./imgs/SalyIntro.png') }} style={{ height: '470px', width: '370px', backgroundColor:'#f08080',borderRadius:60 }} />
          <h1 style={{ textAlign: 'center', paddingLeft: 10, width: 310, color:'#696969' }}>Discover Your<br></br> Own Dream House</h1>
          <Text style={{ textAlign: 'center', paddingLeft: 10, width: 310, color: '#696969',fontSize:15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, send faci;isi et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          <View style={{
              flexDirection: 'row', paddingTop: 50, paddingLeft: 10
          }}>
          <View style={{ padding: 1, width:180, }}>
              <Button
                  title="Sign in"
                  color={'#f08080'}
            />
          </View>
    <View style={{ padding: 1, width:120 }}>
        <Button
            title="Register"
            color={'#dcdcdc'}
            />
          </View>
    </View>
          <br></br>
          <br></br>
          <br></br>
    </View>
  )
        }

export default Intro
