import { v4 as uuidv4 } from 'uuid'
export class HttpErrorResponseModel {
  id = uuidv4()
  status = 0
  message = ''
  errors = []
  url = ''
  raw = null
}
