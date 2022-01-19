
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
    backgroundColor:'red',
    flex:1,
    borderRadius:20,
    marginVertical:10,
    padding:30,
    
  },
  box1child:{
    flex:1,
    backgroundColor:'yellow',
    borderRadius:20,
    marginVertical:20,
  },

  box2:{
    backgroundColor:'blue',
    flexDirection:'column',
    flex:1,
    borderRadius:20,
    marginVertical:10,
    padding:30,
  },
  box2child:{
    flex:1,
    flexDirection:'row',
    marginVertical:15,
    marginHorizontal:10,
  },
  box2child1:{
    flex:1,
    backgroundColor:'gray',
    borderRadius:20,
    marginVertical:10,
    marginHorizontal:10,
  },
});

export default App;
