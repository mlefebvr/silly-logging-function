require('dotenv').config()
const moment = require('moment-timezone')

const log = (logDetails, startTimestamp = undefined) => {
  if (process.env.NODE_ENV !== 'test') {
    const logTime = moment()

    const duration = startTimestamp
      ? logTime.format('x') - startTimestamp.format('x')
      : undefined

    const details = typeof logDetails === 'object'
      ? logDetails
      : { message: logDetails }

    console.log(JSON.stringify({
      environment: process.env.NODE_ENV,
      app: process.env.APP,
      timestamp: logTime,
      details,
      duration,
    }))
  }
}

module.exports = log
