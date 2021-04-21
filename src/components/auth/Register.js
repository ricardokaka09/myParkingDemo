import React, { Component, useState } from 'react'
import { View, Button, TextInput,StyleSheet } from 'react-native'
import { NavigationContainer} from '@react-navigation/native'

import firebase from 'firebase'
import axios from '../../axios/axios'
// import { register } from '../../redux/actions/auth';
import PropTypes from 'prop-types'
import {connect } from 'react-redux'

 function Register() {
        // this.onSignUp = this.onSignUp.bind(this)
    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [password,setPassword] = useState(null)
    const onSignUp = () => {
        // register({name,email,password})
        // const { email, password } = this.state;
       console.log({name,email, password});
    }
    // useEffect(() => {
    //     if(isAuthenticated){
    //         return navigation.navigate("Main")
    //     }
    // }, [])

        return (
            <View style={styles.login}>
                <View style={styles.form}>
                <TextInput
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="name"
                    value={password}
                    secureTextEntry={true}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                

                <Button
                    onPress={onSignUp}
                    title="Sign Up"
                    style={styles.btn}
                />
                </View>
            </View>
        )
   
}
const styles = StyleSheet.create({
    login: {
      flex: 1,
      backgroundColor: '#9ae6ea',
    //   alignItems: 'center',
      justifyContent: 'center',

    },
    form: {
        marginHorizontal: '10px',
        borderRadius: '10px'
    },  
    input:{
        padding: '10px',
        borderStyle: '0.5px solid gray',
        backgroundColor: '#fff',
        width: '100%',
    },
    btn:{
        marginHorizontal: 10,
        
    },
    btnRegister:{

    }
});
// Register.propTypes = {
//     // setAlert: PropTypes.func.isRequired, // go tat ptfr
//     register: PropTypes.func.isRequired,
//   }
//   const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated,
//     auth: state.auth
//   })
  
//   export default connect(mapStateToProps,{register })(Register)
export default Register
