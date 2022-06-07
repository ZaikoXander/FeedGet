/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies = espiões

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "example comment",
      screenshot: "data:image/png;base64,dashbfjd4hsa56djgsfjkh54asgdbasjgd"
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it("should not be able to submit feedback without type", async () => {
    await expect(submitFeedback.execute({
      type: "",
      comment: "example comment",
      screenshot: "data:image/png;base64,dashbfjd4hsa56djgsfjkh54asgdbasjgd"
    })).rejects.toThrow()
  })

  it("should not be able to submit feedback without comment", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "",
      screenshot: "data:image/png;base64,dashbfjd4hsa56djgsfjkh54asgdbasjgd"
    })).rejects.toThrow()
  })

  it("should not be able to submit feedback with invalid screenshot", async () => {
    await expect(submitFeedback.execute({
      type: "BUG",
      comment: "example comment",
      screenshot: "test.jpg"
    })).rejects.toThrow()
  })
})
