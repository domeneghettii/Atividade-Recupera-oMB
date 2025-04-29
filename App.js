import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from './pages/DrawerScreen';
import Drawer2 from './pages/Drawer2'; // ajuste o caminho conforme sua estrutura

const Drawer = createDrawerNavigator();

export default function App() {
return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
<Drawer.Screen name="Home" component={DrawerScreen} />
<Drawer.Screen name="Outros" component={Drawer2} />
</Drawer.Navigator>
</NavigationContainer>
);
}


DrawerScreen.js
