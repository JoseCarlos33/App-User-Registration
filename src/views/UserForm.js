import React, { useState, useContext } from 'react';
import { Text, View,TextInput, Button, StyleSheet } from 'react-native';
import UsersContext from '../context/usersContext';
// import {  } from 'react-native-elements/dist/buttons/Button';

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    const avatarIndefinido = 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png'

    return(
        <View style={style.form}>
            <Text style={style.title}>Nome</Text>
            <TextInput 
                style={style.input}
                onChangeText={nome => setUser({...user, nome})}
                placeholder="Informe o Nome"
                value={user.nome}
            />

            <Text style={style.title}>Email</Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
            />

            <Text style={style.title}>URL da Foto</Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL da sua foto"
                value={user.avatarUrl}
            />
            <Button
                fontSize= '30'
                title="Salvar"
                onPress={()=>{
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form:{
        padding: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 18
    },
    title: {
        fontSize: 21,
    }
})

