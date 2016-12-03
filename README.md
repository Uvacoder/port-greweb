Build the Project
===

Needs Ruby Version
---

**2.1.7**

*(version after this will break.. ruby is so unstable OMG)*

```
rbenv install 2.1.7
rbenv local 2.1.7
rbenv shell 2.1.7
```

Build it
---

Install [bundler](https://github.com/bundler/bundler/)
```
gem install bundler
```

then

```sh
bundle install
bundle exec rake
```
