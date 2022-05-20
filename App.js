import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const App = () => {
  const [active_player, setActive_player] = useState('X');
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ]);

    const markPosition = (position) => {
      if(!markers[position]){
        let temp = [...markers]
        temp[position] = active_player
        setMarkers(temp)
        if(active_player === "X"){ // transfer chance to other player
          setActive_player("O")
        }else{
          setActive_player("X")
        }
      }
    }

    const resetMarkers = () =>{
      setMarkers([
        null, null, null,
        null, null, null,
        null, null, null
      ])
    }

    const calculateWinner = (sqaures) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]){
          return sqaures[a];
        }
      }
      return null;
    }

    useEffect(() => {
      const winner = calculateWinner(markers);
      if(winner === "X"){
        alert("Player X Won")
        resetMarkers()
      }else if(winner === "O"){
        alert("Player O Won")
        resetMarkers()
      }
    }, [markers]) 

  return (
    <StatusBar style={"auto"}></StatusBar>,
    <SafeAreaView style={styles.container}>
      <View style={[styles.playerInfo, {backgroundColor: active_player === "X" ? "#007ff4" : "#f40075"}]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>

        {/*Top Left cell*/}
        <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
          {markers[0] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[0] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>
        
        {/*Top Mid cell*/}
        <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
          {markers[1] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[1] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Top Right cell*/}
        <Pressable style={styles.cell_top_right} onPress={() => markPosition(2)}>
          {markers[2] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[2] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Mid Left cell*/}
        <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
          {markers[3] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[3] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Mid Mid cell*/}
        <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
          {markers[4] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[4] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Mid Right cell*/}
        <Pressable style={styles.cell_mid_right} onPress={() => markPosition(5)}>
          {markers[5] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[5] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Bottom Left cell*/}
        <Pressable style={styles.cell_bottom_left} onPress={() => markPosition(6)}>
          {markers[6] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[6] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Bottom Mid cell*/}
        <Pressable style={styles.cell_bottom_mid} onPress={() => markPosition(7)}>
          {markers[7] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[7] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

        {/*Bottom Right cell*/}
        <Pressable style={styles.cell_bottom_right} onPress={() => markPosition(8)}>
          {markers[8] === "X" && <Image style={styles.icon} source={require("./assets/cross.png")}></Image>}
          {markers[8] === "O" && <Image style={styles.icon} source={require("./assets/zero.png")}></Image>}
        </Pressable>

      </View>
      <Pressable style={styles.cancelBTN} onPress={resetMarkers}>
        <Image source={require("./assets/replay.png")} style={styles.cancelIcon}></Image>
      </Pressable>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
    marginTop: 30,
  },
  playerInfo:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
    borderRadius: 30,
  },
  playerTxt:{
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "white",
  },
  mainContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60,
  },
  cell_top_left:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  cell_top_mid:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
  },
  cell_top_right:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  cell_mid_left:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  cell_mid_mid:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
  },
  cell_mid_right:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  cell_bottom_left:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_bottom_mid:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_bottom_right:{
    height: windowHeight/6.9,
    width: windowWidth/3.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    },
  icon:{
    height: 62,
    width: 62,
  },
  cancelBTN:{
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cancelIcon:{
    height: 80,
    width: 80,
  },
})
