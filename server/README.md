# SmartShorter server
> Smart Link Shortener REST API using Typescript, Express, MongoDB


## Project setup

```
npm install
```

### Start server for development

```
npm run dev
```

### Transpilation to JS for production

```
npm run build
```
## Data Schema 
#### SHORT LINK SCHEMA 

```slug: "s5G1f3"
ios:
  primary: "http://..."
  fallback: "http://..."
android:
  primary: "http://..."
  fallback: "http://..."
web: "http://..."
```
## shortlink API 
### SHORTLINKS  
### List All ShortlinksGET/shortlinks
Return List of All User’s Short Links return empty list if have no link

Example URI

`GET 127.0.0.1:5000/shortlinks`

Request  "List Shortlinks"Show


### Create ShortlinkPOST/shortlinks
Create New shortlink,

the JSON requrest below require all targts(ios,android,web) to be sent to create a new shortlink while slug is optional it will be genrated if not sent with the requrest this to allow for roundome alphanumiric shortlink and custome shortlink if slug was sent.

NOTE 
for the backend

the slug should be unique provided or auto generated

the slug is an case-sensitive alphanumeric

Example URI

`POST 127.0.0.1:5000/shortlinks`

Request  "Create Shortlink"Show

SHORTLINK  
Update Link DataPUT/shortlinks/{slug}

NOTE 

the slug is readonly once it’s been created, this means it can’t be update.

Only sent attr will be updated, other will stay as is

Example URI
`PUT 127.0.0.1:5000/shortlinks/s5G1f3`


### Redirection from a Shortlink

Example URI
`GET 127.0.0.1:5000/shortlinks/s5G1f3`

this will lead to redirection to the target/ destination link 