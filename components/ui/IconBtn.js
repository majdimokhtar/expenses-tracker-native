import React from "react"
import { View, StyleSheet, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
const IconBtn = ({ icon, color, size, onPress }) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={icon} color={color} size={size} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal : 8,
    marginVertical :2
  },
  pressed: {
    opacity: 0.75,
  },
})

export default IconBtn
