FROM node:7.9.0

WORKDIR /app
COPY ./webpack.config.js /app/webpack.config.js

RUN npm init -y
RUN npm install -g webpack

RUN npm install --save react react-dom axios
RUN npm install --save redux react-redux
RUN npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
RUN npm install --save-dev style-loader css-loader sass-loader node-sass

RUN npm install --save-dev redux-thunk redux-logger

CMD ["webpack", "-d", "--watch"]
