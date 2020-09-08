// sick of having to remember the crazy GAS syntax for replying with json. 
// TODO - Add other types of responses when they become necassary

class GasResponse {
  
  constructor (response) {
    this.response = response
    this.responseCode = response.status ? response.status : 200
  }
  
  
  /** =============================
  * Provide a JSON formatted response from GAS script
  * @return {object}
  */
  json() {
    this.toJson()
    
    return ContentService.createTextOutput(this.response)
    .setMimeType(ContentService.MimeType.JSON);   
  }
  
  
  /** =============================
  * Convert string, array, or json to normalize JSON GAS response
  * @return {object}
  */
  toJson() {
    if(typeof this.response === 'string') {
      this.response =  JSON.stringify({
        code: this.responseCode,
        message: this.response
      })
    }
    
    if(Array.isArray(this.response)) {
      this.response =  JSON.stringify({
        code: responseCode,
        data: this.response
      })
    }
    
    if(typeof this.response === 'object') {
      this.response = JSON.stringify({
        code: responseCode,
        data: this.response
      })
    }
  }
  
  
}

