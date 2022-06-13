import { TouchableOpacity } from "react-native"
import { ChatTeardropDots } from "phosphor-react-native"

import { GestureHandlerRootView } from "react-native-gesture-handler"

import { styles } from "./styles"
import { theme } from "../../theme"

import { feedbackTypes } from "../../utils/feedbackTypes"
import { Form } from "../Form"
import { useCallback, useRef } from "react"
import { BottomSheet, BottomSheetRefProps } from "../BottomSheet"

export type FeedbackType = keyof typeof feedbackTypes

export default function Widget() {
  const ref = useRef<BottomSheetRefProps>(null)
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0)
    } else {
      ref?.current?.scrollTo(-200)
    }
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet ref={ref}>
        <Form
          feedbackType="BUG"
        />
      </BottomSheet>
    </GestureHandlerRootView>
  )
}
