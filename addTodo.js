import React ,{useState}from "react";
import {StyleSheet,Text,View,TouchableOpacity,FlatList} from "react-native";


const App=()=>{
  const[sal,setsal]=useState([
    {name:"sushan",key:1},
    {name:"farhan",key:2},
    {name:"ghandi",key:3},
    {name:"bha",key:4},
  ])
  const PresY=(key)=>{
   
      setsal((pre)=>{
        return pre.filter(per=>per.key!=key)
      })

    
  }
  return(
    <View>
    
    <FlatList
    data={sal}
    renderItem={({item})=>(
      <TouchableOpacity onPress={()=>PresY(item.key)}>
      <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
    />


    
    
    
    </View>
  )
}

export default App;