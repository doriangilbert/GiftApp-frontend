//core

import { Image, Pressable, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

//style

//import style from '../Style';

const Groupe = (props) => {

  return (
    <View style={style.view}>
      <Text style={style.title}>Groupe Haddock</Text>
      <Image style={style.photo}
          source={require("../assets/photo.png")}
      />
      <Text style={{fontSize:0, fontWeight:"normal", color:"transparent"}}></Text>

      <View style={styles.button}>
          <TouchableOpacity
              style={styles.sign}
              onPress={() => { console.log("Membres du groupe appuyé"), props.navigation.navigate("PersonnesGroupe") }}
          >
              <LinearGradient
                  colors={['#FF8787', '#f39a9a']}
                  style={styles.sign}
              >
                  <Text style={[styles.textSign, { color: '#fff' }]}>Membres du groupe</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>

      <View style={styles.button}>
          <TouchableOpacity
              style={styles.sign}
              onPress={() => { console.log("Supprimer le groupe appuyé"), props.navigation.navigate("MesGroupes") }}
          >
              <LinearGradient
                  colors={['#FF8787', '#f39a9a']}
                  style={styles.sign}
              >
                  <Text style={[styles.textSign, { color: '#fff' }]}>Supprimer le groupe</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Groupe;

const style = {
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFCF3"
  },
  title: {
    color: "#D74848",
    fontSize: 30
  },
  photo: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 20
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
  },
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
