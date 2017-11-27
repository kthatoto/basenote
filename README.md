
## ./bin/rails_new の後

```
$ docker-compose up
<ctrl-C>
$ docker-compose run --rm rails rake db:create
```

## gemを追加したい時
- ./docker/rails/Gemfileにgem追加
- `$ dcoker-compose build`

## Node moduleを追加したい時
- ./docker/node/Dockerにモジュール追加
- `$ dcoker-compose build`
