## ports
### nodeサーバー
`8080`
### railsサーバー
`3000`

## ./bin/rails_new の後

```
$ docker-compose up
<ctrl-C>
$ docker-compose run --rm rails rake db:create
```

## Add gem
```
#./docker/rails/Gemfileにgem追加
$ dcoker-compose build
```

## Add node module
```
#./docker/node/Dockerにモジュール追加
$ dcoker-compose build
```

## TODO
- 日本語等幅フォント
