import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/Feather';
import name from './name';
const KEYS_TO_FILTERS = ['item.name', 'name'];

const list = [
  {
    title: 'AppNative',
    info: 'more info about app',
    icon: 'star',
  },
  {
    title: 'Comment',  
    info: 'more info',
    icon: 'mail',
  },
];

class MyAccount extends React.Component{
  _onPressButton(item) {
    Alert.alert(item.info);
  }
  render() {
    return ( 
      <View>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            onPress={() => this._onPressButton(item)}
          />
        ))}
        <Button
          title="Go to Comment"
          onPress={() => this.props.navigation.navigate('Comment')}
        />

      </View>
    );
  }
}

class Comment extends React.Component <{}>{
  constructor(props) {
    super(props);
    this.state = { users: [],
    searchTerm: '',
    name: '',
     };
    this.deleteUser = this.deleteUser.bind(this);
    
  }
searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(json => {
        this.setState({ users: json });
      });
  }
  
  deleteUser(id)  {
    this.setState(prev => {
      return { users: prev.users.filter(user => user.id !== id) };
    });
  }
  
  render() {
 //const  = name.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (   
      <View style={styles.container}>
      <SearchInput 
         onChangeText={() => { this.searchUpdated(name) }} 
          style={styles.searchInput}
          placeholder="Search"indexindexd
          value={this.state.name}
         // onPress={ (index, key, name ) => this.filter(index.name)}
          clearIcon={this.state.searchTerm!==''&&<Icon name="x" size={25} />}
          />
         <Button
          title="Go to MyAccount"
          onPress={() => this.props.navigation.navigate('MyAccount')}
        />
        
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.id && item.name}
          renderItem={({ item }) => (
            <View style={styles.containere2}>
                 <TouchableOpacity onPress={this.searchUpdated}>     
              <View>      
                <Text>{item.username}</Text>
                <Text>{item.email}</Text>
                <Text key={item.name} >{item.name}</Text>           
              </View>
              </TouchableOpacity>
              <Button style={styles.buttonDel} title={'X'} onPress={ () => this.deleteUser(item.id) } />
            </View>
          )}
        />

     }
      </View>
    
      
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginTop: '5%',
    alignSelf: 'stretch',
   // flexDirection: 'row',
   // backgroundColor: '#0000ff',
     justifyContent: 'flex-start',
  
  },
  searchInput: {
    left: 25,
     marginTop: '5%',
    borderColor: '#ffd8d8',
    borderWidth: 1,
    backgroundColor: '#dfb',
    color: '#000',
    width: '80%',
    height: '20%',
    float: 'left'
  }, 
  containere2: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
      paddingLeft: '20%',   
    backgroundColor: '#e6ffff',
  },
  buttonDel: {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    marginLeft: '100%'
  }
});

const AppNative = TabNavigator(
  {
    MyAccount: {
      screen: MyAccount,
    },
    Comment: {
      screen: Comment,
    },
  },
  {
    initialRouteName: 'MyAccount',
  }
);

export default class App extends React.Component {
  render() {
    return <AppNative />;
  }
}
