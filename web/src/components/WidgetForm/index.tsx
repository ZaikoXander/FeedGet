import { useState } from "react";

import { CloseButton } from "../CloseButton";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImageURL from "../../assets/bug.svg"
import ideaImageURL from "../../assets/idea.svg"
import thoughtImageURL from "../../assets/thought.svg"

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      alt: "Imagem de um balão de pensamento"
    }
  }
}

// Object.entries(feedbackTypes) =>
/**
 * [
 *  ["BUG", {...}],
 *  ["IDEA", {...}],
 *  ["THOUGHT", {...}]
 * ]
 * 
 */

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      { !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>Hello World</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}