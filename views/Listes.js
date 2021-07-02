import { Image, Pressable, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import style from '../Style';

const Listes = (props) => {

  const DATA = [
    {
      index: 0,
      title: "Listes de cadeaux :",
      data: ["Liste", "Liste", "Liste", "Liste", "Liste", "Liste"]
    }
  ];

  const Item = ({ title }) => (
    <View style={style.item}>
      <Pressable onPress={() => {console.log("Liste appuyé"), props.navigation.navigate("ListeCadeau")}} style={style.itemelement}>
        <Image
          style={[style.itemphoto, style.flexelement]}
          source={require("../assets/gift.png")}
        />
        <Text style={[style.itemtitle, style.flexelement]}>{title}</Text>
      </Pressable>
      <Pressable onPress={() => {console.log("Supprimer appuyé")}}>
        {/* <Image
          style={[style.cancel, style.flexelement]}
          source={require("../assets/cancel.svg")}
        /> */}
        <FontAwesome name="times" size={35} style={style.flexelement} />
      </Pressable>
    </View>
  );

  return (
    <View style={style.view}>
        <View style={style.button}>
            <TouchableOpacity
                style={style.sign}
                onPress={() => { console.log("Nouvelle liste appuyé"), props.navigation.navigate("CreationListe") }}
            >
                <LinearGradient
                    colors={['#FF8787', '#f39a9a']}
                    style={style.sign}
                >
                    <Text style={[style.textSign, { color: '#fff' }]}>Nouvelle liste</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => {
          return <Item title={item} />
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={style.header}>{title}</Text>
        )}
      />
    </View>
  )
}

export default Listes;

{/*
const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  item: {
    backgroundColor: "transparent",
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  header: {
    fontSize: 22,
    backgroundColor: "transparent"
  },
  itemtitle: {
    color: "#D74848",
    fontSize: 20
  },
  itemphoto: {
    width: 70,
    height: 70
  },
  cancel: {
    width: 32,
    height: 32
  },
  itemelement: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  flexelement: {
    marginHorizontal: 5
  },
  bouton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: "10%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FF8787",
    margin: 10,
    width: "55%"
  },
  txtBouton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF",
    width: "100%",
    textAlign: "center"
  }
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: "50%",
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 15
    },
    sign: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 17,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
});
*/}