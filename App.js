import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {


      constructor(){
          super();
          this.state = {
            uri: require("./src/images/dice6.png"),
            uri2: require("./src/images/dice1.png"),
          };
      }

      // creating a method that generates us a random value
      getRandomInt= () => {
        
        return Math.floor(Math.random() * 6 )+ 1;
      }

      // On pressing of Play Button the game starts
      playButtonPressed = () =>{
          var number = this.getRandomInt();
          
          switch(number){
            case 1:
              this.setState({
                uri: require("./src/images/dice1.png"),
              });
              break;

              // for second image
              case 2:
              this.setState({
                uri: require("./src/images/dice2.png"),
              });
              break;

              // for third image
              case 3:
              this.setState({
                uri: require("./src/images/dice3.png"),
              });
              break;

              // for fourth image
              case 4:
              this.setState({
                uri: require("./src/images/dice4.png"),
              });
              break;

              // for fifth image
              case 5:
              this.setState({
                uri: require("./src/images/dice5.png"),
              });
              break;

              // for sixth image
              case 6:
              this.setState({
                uri: require("./src/images/dice6.png"),
              });
              break;


              default:
                   this.setState({
                     uri: require("./src/images/dice6.png"),
                  });
                  break;
          }
      }
      
      //playButtonPressed = () =>{ for uri2

      playButtonPressed2 = () =>{
        var number = this.getRandomInt();
          
        switch(number){
          case 1:
            this.setState({
              uri2: require("./src/images/dice1.png"),
            });
            break;

            // for second image
            case 2:
            this.setState({
              uri2: require("./src/images/dice2.png"),
            });
            break;

            // for third image
            case 3:
            this.setState({
              uri2: require("./src/images/dice3.png"),
            });
            break;

            // for fourth image
            case 4:
            this.setState({
              uri2: require("./src/images/dice4.png"),
            });
            break;

            // for fifth image
            case 5:
            this.setState({
              uri2: require("./src/images/dice5.png"),
            });
            break;

            // for sixth image
            case 6:
            this.setState({
              uri2: require("./src/images/dice6.png"),
            });
            break;


            default:
                 this.setState({
                   uri2: require("./src/images/dice6.png"),
                });
                break;
        }
      }

      bothButtonPressed =() =>{
        
        this.playButtonPressed();
        this.playButtonPressed2();
        
      }

      render(){
          return (
          <View style={styles.container}>
            <Text>Test !</Text>

            <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 50,
                          alignItems: "center",
                          }}>
                <Image source = {this.state.uri} 
                    style={styles.image}
                />
                <Image source = {this.state.uri2}
                    style={styles.image}
                />
            </View>

            <TouchableOpacity onPress={this.bothButtonPressed}>
                <Text style={styles.gameButton}>Play Game</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3C83',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    marginTop: 35,
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 50,
  },
});
