class InvalidParamError extends Error {
  constructor (paramName) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamName'
  }
}

module.exports = InvalidParamError
