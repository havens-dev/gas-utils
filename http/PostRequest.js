//TODO - Add 'PostParams' class that parses each parameter when built

class PostRequest {

  constructor(event) {
    this.queryString = event.queryString
    this.contentLength = event.contentLength
    this.queryParams = event.parameter
    this.payload = new PostData(event.postData)
    this.parameters = event.parameters
    this.response = new GasResponse(this).json()
  }
  
  jsonResponse() {
    return this.response
  }
  
}


class PostData {
  
  constructor(postData) {
    this.contents = JSON.parse(postData.contents)
    this.length = postData.length
    this.name = postData.name
    this.type = postData.type
  }
  
}
