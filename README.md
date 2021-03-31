# spacex-graphql-apollo

To run locally, execute these commands starting from the root directory:

* `npm i`
* `cd src`
* `node index.js`
* Visit `localhost:4000` in your browser

You should see the GraphQL Playground GUI

Copy and paste the following query into the left panel and click the Play button in the center:
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
