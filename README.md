# U220930

### A simple web application that can load data with XHR.

<br>
The `Load CMS` button will fetch the following data from the web server and display it as a list.

```JSON
{
  "cars": [
    "Volvo C40",
    "Volvo V60",
    "Volvo XC40",
    "Volvo XC60",
    "Volvo V90",
    "Volvo XC Classic"
  ]
}
```

The web application loads it's layout from json. The format can be defined like the folloing:

```JSON
{
  "elements": [
    {
      "tag": "button",
      "id": "sampleButton1",
      "content": "Sample button 1"
    },
    {
      "tag": "button",
      "id": "sampleButton2",
      "content": "Sample button 2"
    }
  ]
}

```
