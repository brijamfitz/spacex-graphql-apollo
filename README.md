# spacex-graphql-apollo

To run locally:

* `npm i`
* `cd src`
* `node index.js`
* Visit `localhost:4000` in your browser

You should see the Apollo Playground GUI

Paste the following into the left panel and click the Play button in the center:
```
{
  launches {
    mission_name
    launch_date_unix
    rocket {
      payloads {
        norad_id
      }
    }
  }
}
```
