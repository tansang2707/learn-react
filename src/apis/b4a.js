import Parse from 'parse'
Parse.serverURL = process.env.REACT_APP_API_URL

Parse.initialize(
  process.env.REACT_APP_ID, // This is your Application ID
  process.env.REACT_APP_JS_KEY // This is your Javascript key
)

export default Parse
