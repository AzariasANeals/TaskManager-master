
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Pressable } from 'react-native';
import { useState,} from 'react'

export function TaskManager(){
    const initialList =[
      {
          id: "",
          title:"",
          completed:false
      }
    ]; 
    // An Array to store tasks
  
    // Constant for checkmark status
    const[checked, setCheck]= useState(false);
  
    // Constant for task setting 
    const[task, setTask]= useState({});
  
    // Constant for id setting
    const[tid, setId] = useState(1);
  
    // Constant for list of tasks
    const[taskList, setTaskList] = useState([]);
    const[tname, setTaskName] = useState(''); 
    // let tinput="3";
    //const handleChange = () => {setCheck(!checked);};
  
    // let updatedValue={};
    function addTask(){
      setTaskName(tname);
      setId(tid + 1);
      updatedValue={
        id: tid,
        title: tname,
        completed: false
      };
      setTask(updatedValue);
      const newList = () => ([...taskList, updatedValue]);
      setTaskList(newList);
      console.log(taskList);
    }
  
    function toggleTaskCompletion(completedTask, taskList)
    {
        // first create a new object from the task to be toggled with the
        //    toggle update (completed field)
        updatedValue =
        {
          id: completedTask.id,
          title: completedTask.title,
          completed: !completedTask.completed
  
        }
  
        // grab the id for the task to toggle
        const idChange = completedTask.id;
  
        //  grab a list of all of the tasks that come before the task to update in the list
        const firstElements = taskList.filter(idx => (idx === undefined || idx.id < idChange));
  
        //  grab a list of all of the tasks that come after the task to update in the list
        const lastElements = taskList.filter(idx => (idx === undefined || idx.id > idChange));
  
        //  combine the two lists with the new updated task
        const newList = [...firstElements, updatedValue, ...lastElements];
  
        // set the task list to the new combined tasks
        setTaskList(newList);
    }
  
    return(
    <>
    <Text>Add Tasks!</Text>
    
    <TextInput
     style={styles.input}
     onChangeText={setTaskName}
     value={tname}
     placeholder="Add New Task..."
     // clearTextOnFocus
     clearButtonMode = 'while-editing'
     >
    </TextInput>
     <Text>[{tname}]</Text>
    
    <Button
     title="addTask"
     defaultValue={task}
     onPress= {addTask}>
    </Button>
  
    <View style={styles.taskStyle}>
    {taskList.map((task, index) => 
    <Text
      key={index}>{task.id}: {task.title} {task.completed?" [✔] ":" [X] "}
      <Button
       color= 'red'
       title="complete"
       defaultValue={setTask}
       onPress={() => toggleTaskCompletion(task, taskList)}
      >
      </Button>
    </Text>)}
    </View>
    </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input:{
      backgroundColor:'#FFFFFF',
      height: 20,
      width: 300,
      margin: 20,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10
    },
  
    scrollView:{
      paddingVertical:200
      },
  
    taskStyle:{
      margin: 50,
      alignItems:'flex-start',
      textAlign:'left'
    },
  });
  