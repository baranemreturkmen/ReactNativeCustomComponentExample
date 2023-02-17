import React from 'react';
import {SafeAreaView,View,Text,Button,StyleSheet} from 'react-native';

//View -> div, Text -> p

//Component
//Arrow Function const App(sabite) = () => {...}(arrow function)
//sayHello() fonksiyonu çağırmaz fonksiyonun sonucunu çağırır aman dikkat!
//Property kullanırken boolean property adını yazman demek property = true'ya karşılık geliyor.
//inline style çok sağlıklı bir kullanım değil. <View style = {{backgroundColor: 'red'}}>
//View içerisinde ne kadar çok child varsa o kadar yer kaplar çünkü biz daha view için sabit bir boyut vermedik.
/*function App(){

  const sayHello = label => {
    console.log("Hello! "+label);
  }

  return(
    //JSX
    <SafeAreaView>
      <View style = {{backgroundColor: 'red'}}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.container}>
        <Text>Hello React Native!</Text>
      </View>
      <Button title="Press Me!"
        onPress={() => sayHello("Emre")}
        disabled={false} color='lightcoral'></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'orange',
    margin: 10,
    padding: 11,
    borderRadius: 5,
  },
})*/

//Flex: bulunduğun yerin sınırları içerisinde kaplayabildiğin kadar yer kapla demek!

/*function App(){
  return(
    //JSX
    <SafeAreaView style = {styles.container}>
      <View style = {styles.upper_view_container}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.center_view_container}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.bottom_view_container}>
        <Text>Hello React Native!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
  },
  upper_view_container:{
    flex: 1.5,
    backgroundColor:'orange',
  },
  center_view_container:{
    flex: 2,
    backgroundColor:'red',
  },
  bottom_view_container:{
    flex: 3.75,
    backgroundColor:'purple',
  },
})*/

/*alignItems ve justifyContent flex ile kullanılmak zorunda değil stil olarak flex kullanmadan
da bu yapıları kullanabiliriz. Fakat justifyContent işlevselliğini yitiriyor. Çünkü View kadar
yer kaplandığı için totalde, flex kullanılmadığı zaman bu yapı anlamını yitiriyor.*/

function App(){
  return(
    //JSX
    <SafeAreaView style = {styles.container}>
      <View style = {styles.box_1}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.box_2}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.box_3}>
        <Text>Hello React Native!</Text>
      </View>
      <View style = {styles.box_4}>
        <Text>Hello React Native!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'purple',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box_1:{
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2:{
    width: 75,
    height: 75,
    backgroundColor: 'green',
  },
  box_3:{
    width: 75,
    height: 75,
    backgroundColor: 'aqua',
  },
  box_4:{
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
})

export default App;