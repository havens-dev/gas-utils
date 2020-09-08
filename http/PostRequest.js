// sick of having to remember the crazy GAS syntax for a simple json response... 

//TODO - Add 'PostParams' class that parses each parameter when built

/**
BASIC USAGE
--

=> /post to prod url
https://webappurl.com/exec?query_item_one=foo&query_item_two=bar

--
(postBody)

  {
	  "body_one_firstname": "john",
	  "body_two_lastname": "doe"
  }
)
-- 

function doPost(e) {
  return new PostRequest(e).jsonResponse()
}

--

returns ...
{
    "status": 200,
    "data": {
        "queryString": "query_item_one=foo&query_item_two=bar",
        "contentLength": 62,
        "queryParams": {
            "query_item_one": "foo",
            "query_item_two": "bar"
        },
        "payload": {
            "contents": {
                "body_one_firstname": "john",
                "body_two_lastname": "doe"
            },
            "length": 62,
            "name": "postData",
            "type": "application/json"
        },
        "parameters": {
            "query_item_two": [
                "bar"
            ],
            "query_item_one": [
                "foo"
            ]
        }
    }
}
*/

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
