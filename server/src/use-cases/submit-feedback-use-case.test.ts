/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    )

    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "example comment",
      screenshot: "data:image/png;base64,dashbfjd4hsa56djgsfjkh54asgdbasjgd"
    })).resolves.not.toThrow()
  })
})
