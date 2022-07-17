# RSSchool NodeJS Graphql Service

<br/>

### [assignment](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md)

### [score](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/score.md)



<br/>

### Запуск Docker с базой MongoDB


```
$ cd docker

$ docker-compose up
```

<br/>

### Запуск микросервисов


```
$ cd apps/microservices

$ {
  npm run install:albums
  npm run install:artists
  npm run install:bands
  npm run install:favourites
  npm run install:genres
  npm run install:tracks
  npm run install:users
}


$ npm run run:albums:prod
$ npm run run:artists:prod
$ npm run run:bands:prod
$ npm run run:favourites:prod
$ npm run run:genres:prod
$ npm run run:tracks:prod
$ npm run run:users:prod
```

<br/>

### Import Postman Scripts


POST -> {{users_url}}/register


**response**

<br/>

```json
***
  "email": "met9129@gmail.com",
  "password": "118649qwe",
***
```

<br/>

POST -> {{users_url}}/login



<br/>

http://localhost:4000/graphql


<br/>

### Полезные материалы

[Data sources](https://www.apollographql.com/docs/apollo-server/data/data-sources/)


https://github.com/webmakaka/The-Modern-GraphQL-Bootcamp-2019/tree/master/01-graphql-basics
