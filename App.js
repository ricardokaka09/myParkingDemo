/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Landing from './src/components/auth/Landing';
import Login from './src/components/auth/Login';

const App  = () => {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);

  const onSubmit = () =>{

  }
  return (
    <View >
      {/* <SafeAreaView style={styles.form}> */}
        <Login></Login>
        {/* <Text> Dang Cong Hung</Text> */}
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button
          style={styles.btnLogin}
          title="Dang Nhap"
          onPress={onSubmit}
        />
        <Button
          style={styles.btnLogin}
          title="Dang Ki"
          onPress={onSubmit}
        /> */}
    {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    position: 'relative',
    alignItems: 'center',
    
  },
  form: {
    position: 'absolute',
    alignItems: 'center',
    top: '50%',
    backgroundColor: '#6153FF',
    color: '#ffffff'

  },
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
  input: {
    padding: 4,
    paddingRight: 10,
    textAlign: 'left',
    // height: 100,
    fontSize: 14,
    fontWeight: '600',
    margin: 12,
    width: '80%',
    borderWidth: 1,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 20
  },
  btnLogin: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  }
});

export default App;
