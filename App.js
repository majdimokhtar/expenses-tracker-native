import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { GlobalStyles } from "./constants/styles"
import ManageExpense from "./screens/ManageExpense"
import RecentExpenses from "./screens/RecentExpenses"
import AllExpenses from "./screens/AllExpenses"
import { Ionicons } from "@expo/vector-icons"
import IconBtn from "./components/ui/IconBtn"

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()
function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => {
          return (
            <IconBtn
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpense")
              }}
            />
          )
        },
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabbarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />
          },
        }}
        component={RecentExpenses}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          tabbarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />
          },
        }}
        component={AllExpenses}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverView"
            options={{ headerShown: false }}
            component={ExpensesOverview}
          />
          <Stack.Screen
            name="ManageExpense"
            options={{
            presentation : "modal"
            }}
            component={ManageExpense}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
