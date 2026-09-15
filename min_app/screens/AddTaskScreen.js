// view,text, textInput og button importeres. 
import { View, Text, TextInput, Button } from 'react-native';
//Her bliver der importeret useState for at inputtet kan gemmes. 
import { useState } from 'react';
import styles from '../styles/Style';

export default function AddTaskScreen({
  navigation,
  tasks,
  setTasks
}) {
//Her bliver det som brugeren indtaster gemt.
  const [task, setTask] = useState('');

  function addTask() {
//Her bliver den nye opgave oprettet.
    const newTask = {
      id: (tasks.length + 1).toString(),
      title: task
    };
//Her tilføjes den nye opgave til opgavelisten.
    setTasks([...tasks, newTask]);
//Her bliver feltet tømt efter opgaven bliver tilføjet.
    setTask('');
//Her videre sendes man til siden med opgaver.
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