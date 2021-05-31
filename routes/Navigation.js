import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Accueil from '../views/Accueil'
import Profil from '../views/Profil'
import Amis from '../views/Amis'
import Mes_groupes from '../views/Mes_groupes'

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Accueil"
            >

                <Stack.Screen
                    name="Accueil"
                    component={Accueil}
                />
                
                <Stack.Screen
                    name="Profil"
                    component={Profil}
                />

                <Stack.Screen
                    name="Amis"
                    component={Amis}
                />

                <Stack.Screen
                    name="Mes_groupes"
                    component={Mes_groupes}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}