import React, { useContext } from 'react'
import { FlatList, View, Alert, StyleSheet } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/usersContext'


export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDel(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={30} color="orange"/>}
                />

                <Button
                    onPress={() => confirmUserDel(user)}
                    type="clear"
                    icon={<Icon name="delete" size={30} color="red"/>}
                />

            </>
        )
    }

    function getUserItem({ item: user }){
        return(

            <ListItem key={user.id} 
                bottomDivider
                onPress={() => props.navigation.navigate('UserProfile', user)}
                >
                
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content >
                    <ListItem.Title style={{fontSize:20}}>{user.nome}</ListItem.Title>
                    <ListItem.Subtitle style={{fontSize:17}}>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}

            </ListItem>
            
        )
    }
    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
                
            />
        </View>
    )
}

