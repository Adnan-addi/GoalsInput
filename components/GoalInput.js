import React from "react";
import { StyleSheet ,View,TextInput,Button,Modal,Image } from "react-native";




export default function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText] = React.useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      };

     
      

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }
     



    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
            <TextInput
            style={styles.textInput}
            placeholder='Your course goal!'
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>  
       
            <View style={styles.buttonConatiner}>
                <View style={styles.button}>
                <Button title='Add Goal !' onPress={addGoalHandler} color="#b190f0"/>
                </View>   

                <View style={styles.button}>
                <Button title="Cancel" onPress={props.onClose}color="#f31282" />
                </View>
            </View>

        

      </View>
      </Modal>

    );
 }
 

 

const styles = StyleSheet.create({
 
    inputContainer:{
        flex:1,
        
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:"#311b6b"
      
      },
      image:{
        width:100,
        height:100,
        margin:20,

      },
      textInput:{
        borderWidth:1,
        borderColor:'#efd0ff',
        width:'100%',
        paddingLeft:10,
        borderRadius:6,
        color:'#120f38',
        backgroundColor:"#efd0ff",
        padding:16,
  
      },
      buttonConatiner:{
        flexDirection:'row',
        marginTop:16,

      },
      button:{
        width:100,
        marginHorizontal: 8,
      }
    
    });
    