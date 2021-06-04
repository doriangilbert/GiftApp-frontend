import React from 'react'
import { View, ImageBackground, Linking } from 'react-native'
import { SocialIcon } from 'react-native-elements'



import style from '../Style'

export const BottomSocial = () => {
    return(
        <View style={style.footerSocial}>
            <ImageBackground source={require("../assets/footer.png")} style={style.footerimg}>
                <View style={style.footerSocialInt}>
                    {/*<View style={style.elementSocial}></View>
                    <View style={style.elementSocial}></View>
                    <View style={style.elementSocial}></View>*/}
                    <SocialIcon style={style.elementSocial} type="facebook" onPress={() => {Linking.openURL("https://facebook.com")}}/>
                    <SocialIcon style={style.elementSocial} type="instagram" onPress={() => {Linking.openURL("https://instagram.com")}}/>
                    <SocialIcon style={style.elementSocial} type="twitter" onPress={() => {Linking.openURL("https://twitter.com")}}/>
                </View>
            </ImageBackground>
        </View>
    )
}