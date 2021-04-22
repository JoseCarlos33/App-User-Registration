import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { Button, Icon} from 'react-native-elements'

import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UsersProvider } from './context/usersContext';
import UserProfile from './views/UserProfile';


const Stack = createStackNavigator()

export default props => (
    
    <SafeAreaView style={{flex:1 }}>
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                    >
                    
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={ ({navigation}) => {
                            return{
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button
                                        onPress={()=>navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white"/>}
                                    />
                                )
                            }
                        }}
                    />

                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formulário de Usuários"
                        }}
                    />

                    <Stack.Screen
                        name="UserProfile"
                        component={UserProfile}
                        options={{
                            title: "Perfil do Usuário"
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    </SafeAreaView>   
)

const screenOptions = {
    headerStyle:{
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}
