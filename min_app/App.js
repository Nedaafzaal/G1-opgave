//Her imoteres useSate så det er muligt at gemme og ændre listen af opgaver
import { useState } from 'react';
//Impoteres så man kan bruge navigation
import { NavigationContainer } from '@react-navigation/native';
//Bruges til at oprette Stack navigation mellem de 3 screens 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Her impoteres Homescreen, taskscreen og addtaskscreen. 
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskScreen from './screens/AddTaskScreen';
//Her oprettes stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
//Her bliver listen af opgaver gemt i state
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Læs kapitel 4' },
    { id: '2', title: 'Lav aflevering' },
  ]);

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'StudieOverblik' }}
        />

        <Stack.Screen
          name="Tasks"
          options={{ title: 'Mine opgaver' }}
        >
          {(props) => (
            <TasksScreen
              {...props}
              tasks={tasks}//Her sendes listen af opgaver videre til taskScreen. 
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddTask"
          options={{ title: 'Tilføj aktivitet' }}
        >
          {(props) => (
            <AddTaskScreen
              {...props}
              tasks={tasks}//Her sendes den nuværende liste af opgaver videre
              setTasks={setTasks}//Her bliver listen opdateret ved at sende funktionen videre. 
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}