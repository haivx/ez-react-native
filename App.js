import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import ManageExpenseComponent from './screen/ManageExpense'
import RecentExpenseComponent from './screen/RecentExpenses'
import AllExpenseComponent from './screen/AllExpenses'
import { GlobalStyles } from './constants/styles'
import IconButton from './components/UI/IconButton'
import ExpenseContextProvider from './store/expense-context'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpenseOverview({ navigation }) {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: {
          backgroundColor: GlobalStyles.colors.accent500,
        },
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate('ManageExpense')}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpenseComponent}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenseComponent}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <ExpenseContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenseComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  )
}
