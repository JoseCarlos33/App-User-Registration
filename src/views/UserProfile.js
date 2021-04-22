import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {  Avatar } from 'react-native-elements'


export default ({route}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const Separator = () => (
        <View style={style.separator} />
      );
    
    return(
        <View style={style.tela}>
            <View style={style.avatar}>
                <Avatar
                    rounded 
                    size="xlarge"
                    source={{uri: user.avatarUrl}}
                    // containerStyle={{ flexDirection:'row', alignItems:'center' }}
                />
            </View>
            <Separator />
            
            <Text style={style.title}>Nome:</Text>
            <Text style={style.info}>{user.nome}</Text>
            <Text></Text>

            <Text style={style.title}>Email:</Text>
            <Text style={style.info}>{user.email}</Text>
            
        </View>
    )
}

const style = StyleSheet.create({
    tela:{
        padding: 15,
        
    },
    title: {
        fontSize: 21,
    },
    info:{
        fontSize: 30,
    },
    avatar: {
        alignItems: 'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})