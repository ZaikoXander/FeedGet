import { Image, Text, TouchableOpacity, View } from "react-native"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"

import { ArrowLeft } from "phosphor-react-native"

import { FeedbackType } from "../Widget"
import { feedbackTypes } from "../../utils/feedbackTypes"
import { ScreenshotButton } from "../ScreenshotButton"

import { styles } from "./styles"
import { theme } from "../../theme"
import { Button } from "../Button"
import { useState } from "react"
import { captureScreen } from "react-native-view-shot"

interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  }
  function handleScreenshotRemove() {
    setScreenshot(null)
  }

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
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button
          isLoading={false}
        />
      </View>

    </View>
  )
}
