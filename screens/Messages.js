import React from 'react';
import {View,StyleSheet,Text} from 'react-native';


export default class Messages extends React.Component{
        render() {
                    return(

                            <View>

                                   <Text style = {styles.textStyle}>

                                    Welcome to messages. Here you can text anyone and literally say anything you like.

                                </Text>

                            </View>

                    );

        }

}

const styles = StyleSheet.create({
    textStyle: {


        fontSize: 35,
        fontWeight: 'bold',
        backgroundColor: 'Black'

    }



}



);