import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home"; 
import { SelectTable } from "../screens/SelectTable";
import { Table } from "../screens/Table";
import { CloseTable } from "../screens/CloseTable";
import { Confirmation } from "../screens/Confirmation";

export function AppRoutes(){
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="SelectTable"
                component={SelectTable}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="Table"
                component={Table}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="CloseTable"
                component={CloseTable}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="Confirmation"
                component={Confirmation}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}