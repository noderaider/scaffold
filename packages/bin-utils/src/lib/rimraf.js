import { promisify } from 'bluebird'
export default promisify(require('rimraf'))