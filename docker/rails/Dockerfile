FROM ruby:2.4.2
ENV LANG C.UTF-8
# for mysql
RUN apt-get update -qq && apt-get install -y build-essential mysql-client nodejs

RUN gem install bundler

WORKDIR /tmp
ADD ./docker/rails/Gemfile Gemfile
ADD ./docker/rails/Gemfile.lock Gemfile.lock
RUN bundle install

ENV APP_HOME /rails_app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
