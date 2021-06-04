import React from 'react'
import { View, ImageBackground } from 'react-native'



import style from '../Style'

export const BottomSocial = () => {
    return(
        <View style={style.footerSocial}>
            <ImageBackground source={require("../assets/footer.png")} style={style.footerimg}>
                <View style={style.footerSocialInt}>
                    <View style={style.elementSocial}></View>
                    <View style={style.elementSocial}></View>
                    <View style={style.elementSocial}></View>
                </View>
            </ImageBackground>
        </View>
    )
}