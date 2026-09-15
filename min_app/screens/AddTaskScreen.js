import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import styles from '../styles/Style';

export default function AddTaskScreen({
  navigation,
  tasks,
  setTasks
}) {

  const [task, setTask] = useState('');

  function addTask() {

    const newTask = {
      id: (tasks.length + 1).toString(),
      title: task
    };

    setTasks([...tasks, newTask]);

    setTask('');

    navigation.navigate('Tasks');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Tilføj aktivitet
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Skriv din aktivitet her"
        value={task}
        onChangeText={setTask}
      />

      <Button
        title="Tilføj aktivitet"
        onPress={addTask}
      />

    </View>
  );
}