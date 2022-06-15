import { Image, Text, TouchableOpacity, View } from "react-native"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"

import { ArrowLeft } from "phosphor-react-native"

import { FeedbackType } from "../Widget"
import { feedbackTypes } from "../../utils/feedbackTypes"
import { ScreenshotButton } from "../ScreenshotButton"

import { styles } from "./styles"
import { theme } from "../../theme"
import { Button } from "../Button"

interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <BottomSheetTextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot=""
        />
        <Button
          isLoading={false}
        />
      </View>

    </View>
  )
}
