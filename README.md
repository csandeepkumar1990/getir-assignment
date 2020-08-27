# getir-assignment
Getir Interview Assignment

# Heroku URL
https://getir-assignment-sandeep.herokuapp.com/api-docs/

# Running the API 
```
git clone https://github.com/csandeepkumar1990/getir-assignment.git
cd getir-assignment
npm i
npm start
```
# Testing the API
```
npm test
```
# Sample Data to test API
```
startDate: '2018-06-14'

endDate: '2020-07-15'

minCount: 1

maxCount: 100000

```

# Request URL 

http://localhost:3000/api/products

# Sample Request 

https://getir-assignment-sandeep.herokuapp.com/api-docs/
```
{
	"startDate": "2018-06-14",
	"endDate": "2020-07-15",
    "minCount": 1,
    "maxCount": 100000
}
```
Response
```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "5f4152768cadf9001ebd9eaf",
            "createdAt": "2019-09-12T19:04:53.905Z",
            "totalCount": 99310
        },
        {
            "key": "5f4152768cadf9001ebd9d9a",
            "createdAt": "2020-02-13T07:34:22.935Z",
            "totalCount": 94384
        },
        {
            "key": "5f4152768cadf9001ebd9f55",
            "createdAt": "2020-03-27T01:01:39.657Z",
            "totalCount": 97736
        },
        {
            "key": "5f4152768cadf9001ebd9fdd",
            "createdAt": "2020-03-18T07:36:56.826Z",
            "totalCount": 97763
        },
        {
            "key": "5f4152768cadf9001ebd9d12",
            "createdAt": "2019-08-15T10:33:29.395Z",
            "totalCount": 90790
        },
        {
            "key": "5f4152768cadf9001ebd9f6a",
            "createdAt": "2019-11-07T04:22:19.680Z",
            "totalCount": 99759
        },
        {
            "key": "5f4152768cadf9001ebd9d51",
            "createdAt": "2019-02-27T21:49:03.559Z",
            "totalCount": 99357
        },
        {
            "key": "5f4152768cadf9001ebd9e7f",
            "createdAt": "2019-06-15T06:36:56.628Z",
            "totalCount": 97166
        },
        {
            "key": "5f4152768cadf9001ebd9f49",
            "createdAt": "2020-06-20T10:32:48.159Z",
            "totalCount": 97723
        }
    ]
```
}




