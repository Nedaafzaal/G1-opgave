import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {

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
              tasks={tasks}
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
              tasks={tasks}
              setTasks={setTasks}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}