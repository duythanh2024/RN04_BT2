
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';


const App= () => {


  return (
    <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.box1child}>
          </View>
          <View style={styles.box1child}>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.box2child}>
              <View style={styles.box2child1}></View>
              <View style={styles.box2child1}></View>
          </View>
          <View style={styles.box2child}>
              <View style={styles.box2child1}></View>
              <View style={styles.box2child1}></View>
          </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex:1,
   
  },
  box1:{
    backgroundColor:'#52BE80',
    flex:1,
    borderRadius:20,
    marginVertical:20
  
    
  },
  box1child:{
    flex:1,
    backgroundColor:'#DAF7A6',
    borderRadius:20,
    marginVertical:30,
    marginHorizontal:20
  },

  box2:{
    backgroundColor:'#85C1E9',
    flexDirection:'column',
    flex:1,
    borderRadius:20,
    marginVertical:10,
    padding:10,
  },
  box2child:{
    flex:1,
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:10,
  },
  box2child1:{
    flex:1,
    backgroundColor:'#2E86C1',
    borderRadius:20,
    marginVertical:15,
    marginHorizontal:10,
  },
});

export default App;
