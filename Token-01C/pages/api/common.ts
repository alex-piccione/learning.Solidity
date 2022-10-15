export interface Response<T> {
  success: boolean
  errorMessage?: string
  data?: T
}

const Ok = <T>(data: T): Response<T> => {
  return {
    success: true,
    data,
  }
}

const Error = <T>(errorMessage: string): Response<T> => {
  return {
    success: false,
    errorMessage,
  }
}

export default { Ok, Error }
