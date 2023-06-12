import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View ,
  TextInput, 
  ScrollView, 
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoals,setCourseGoals]= React.useState([]);
  const [modalIsVisisble,setModalIsVisible]= React.useState(false);


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      // {text: enteredGoalText, key: Math.random().toString()},
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    closeAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function closeAddGoalHandler(){
    setModalIsVisible(false)
  }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>

      <Button  title='Add New Goal' color={'#a065ec'}
      onPress={startAddGoalHandler}
      />

     <GoalInput onAddGoal = {addGoalHandler} visible={modalIsVisisble} onClose={closeAddGoalHandler}/>
  
      <View style={styles.goalsContainer}>

      <FlatList 
      data={courseGoals}
      keyExtractor={(item,index) => {
        return item.id;
      }}
      renderItem={(itemData) =>{
        return <GoalItem 
        text={itemData.item.text} 
        id = {itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>
      }}
      />
       
        
     
      



      </View>
       

    </View>
    </>
  );
}

const styles = StyleSheet.create({
 
container:{
  flex:1,
  paddingTop:50,
  paddingHorizontal:16,
 
},
goalsContainer:{
  flex:5
},
});
