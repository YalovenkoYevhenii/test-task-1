const ERROR_MESSAGES = {
  s404NotFound: 'Resource not found',
  s400BadRequest: 'Invalid Request',
  s400ValidationError: 'Validation error',
  s400InvalidQuery: 'Please, provide valid ticker query',
  s400incorrectPath: 'Can not find. Probably, ticker is not valid',
  s500SomethingWentWrong: 'Something went wrong. Please, try again later'
};

Object.freeze(ERROR_MESSAGES)

export default ERROR_MESSAGES;