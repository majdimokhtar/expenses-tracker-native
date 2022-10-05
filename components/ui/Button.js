import { GlobalStyles } from "../../constants/styles"
import { View, StyleSheet, Pressable,Text } from "react-native"

const Button = ({ onPress, children, mode, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed} >
        <View style={[styles.btn, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
})

export default Button
