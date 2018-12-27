import React , {Component} from 'react';
import { Button, Text, View } from 'react-native';
import {createStackNavigator , createAppContainer} from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex:1 , alignItems:"center", justifyContent:"center"}}>
        <Text>Home Screen!</Text>
        <Button 
          title="go D"
          onPress={()=>{
            this.props.navigation.navigate('Details', {
              itemId:86,
              otherParam: "anything u Want"
            })
          }}
          />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render(){
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam' , 'some default value');
    return(
      <View style={{flex:1 , alignItems:"center", justifyContent:"center"}}>
        <Text>Details Screen</Text>
        <Text>itemId : {JSON.stringify(itemId)}</Text>
        <Text>otherParam : {JSON.stringify(otherParam)}</Text>
        <Button 
          title="Go to D ... again"
          onPress={()=>this.props.navigation.push('Details' , {itemId : Math.floor(Math.random()*100)})}/>
        <Button 
          title="Go to H"
          onPress={()=>this.props.navigation.navigate('Home')}
        />
        <Button 
          title="Go to Back"
          onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home:HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName:'Home'
  }
)
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render(){
    return(
  <AppContainer/>
    )
  }
} 