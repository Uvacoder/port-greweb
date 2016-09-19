---
title:  Relay, scrolling connections
author: Gaetan
layout: post
tags:
  - react
  - relay
---

[Relay]: https://github.com/facebook/relay
[Relay-spec]: https://facebook.github.io/relay/docs/graphql-relay-specification.html#content


[Relay][Relay] doesn't solve for you how you should render your components. Relay is "universal" and don't even assume it runs on a browser context. Relay focuses only on providing an abstraction to work with GraphQL, the same way React focuses only on the rendering part. Each library solves one single problem at a time *(and hell, each are complex enough problem to solve already)*.

These libraries being very generic, it's now up to the community to solve the "more specific". Just search on NPM and you can find tons of React libraries already, some might help you to solve part of the problem you want to solve?

This article shows one use-case: **implementing a component handling the scroll of a list to pull more data** of a GraphQL connection with Relay.

## Usage

In React you should think in term of components that subdivide individual task to solve. To solve scrolling a connection you should just need this:

```js
<InfiniteScrollable relay={relay}>
  ...
</InfiniteScrollable>
```

Here is a real use-case we have at [projectseptember](https://projectseptember.com).


```js
import React, {
  Component,
  PropTypes,
} from "react";
import Relay from "react-relay";
import List from "material-ui/List";
import Content from "./Content";

class ContentStream extends Component {
  static propTypes = {
    relay: PropTypes.object.isRequired,
    user: PropTypes.object,
  };
  render () {
    const { user, relay } = this.props;
    return (
      <InfiniteScrollable relay={relay}>
        <List>
          {user.stream.edges.map(e =>
            <Content content={e.node} key={e.cursor} />
          )}
        </List>
      </InfiniteScrollable>
    );
  }
}

export default Relay.createContainer(ContentStream, {
  initialVariables: {
    first: 50,
  },
  fragments: {
    user: () => Relay.QL`
fragment on User {
  stream (first:$first) {
    edges {
      cursor
      node {
        ${Content.getFragment("content")}
      }
    }
  }
}
    `
  }
});
```

We don't have to express how to "pull for more data" in that code. In fact, this is delegated to `InfiniteScrollable` and we never have to think again about it.


## InfiniteScrollable implementation

Relay enforces to implement [a subset of GraphQL spec](https://facebook.github.io/relay/docs/graphql-relay-specification.html#content), like the Connection API. It's a good thing because we can also rely on this fact, and what we only need is the `relay` object to implement a generic pull-on-scroll.


```js
import {
  Component,
  PropTypes,
} from "react";
import {findDOMNode} from "react-dom";

const regex = /(auto|scroll)/;

const style = (node, prop) =>
  getComputedStyle(node, null).getPropertyValue(prop);

const scroll = (node) =>
  regex.test(
    style(node, "overflow") +
    style(node, "overflow-y") +
    style(node, "overflow-x"));

const scrollparent = (node) =>
  !node || node===document.body
  ? document.body
  : scroll(node)
    ? node
    : scrollparent(node.parentNode);

const resizeEventOn = n => n===document.body ? window : n;

export default class InfiniteScrollable extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    relay: PropTypes.object,
    style: PropTypes.object,
    loadPixelsInAdvance: PropTypes.number,
    relayVariable: PropTypes.string,
    chunkSize: PropTypes.number,
    // loadMore could even be generalize, this component works if you provide loadMore instead of relay
    loadMore: PropTypes.func, // (can) returns a promise
  };
  static defaultProps = {
    loadPixelsInAdvance: 1000,
    relayVariable: "first",
    chunkSize: 50,
  };

  state = { loading: false };

  resizeBoundOnDom = null;

  componentWillMount () {
    this.syncScrollBodyListener(this.props);
    this.checkScroll();
  }

  componentWillUnmount () {
    this.unbindResizeEvent();
  }

  componentDidUpdate () {
    this.syncScrollBodyListener();
  }

  unbindResizeEvent () {
    if (this.resizeBoundOnDom) {
      this.resizeBoundOnDom.removeEventListener("scroll", this.checkScroll);
      this.resizeBoundOnDom = null;
    }
  }

  getScrollParent () {
    return scrollparent(findDOMNode(this));
  }

  syncScrollBodyListener = () => {
    const resizeBoundOnDom = resizeEventOn(this.getScrollParent());
    if (resizeBoundOnDom !== this.resizeBoundOnDom) {
      this.unbindResizeEvent();
      resizeBoundOnDom.addEventListener("scroll", this.checkScroll);
    }
  };

  loadMoreUsingRelay = () => {
    const { relay, relayVariable, chunkSize } = this.props;
    return new Promise((resolve, reject) =>
     relay.setVariables({
       [relayVariable]: relay.variables[relayVariable] + chunkSize
     }, readyState => {
       if (readyState.error) reject(readyState.error);
       if (readyState.done) resolve();
     }));
  };

  checkScroll = () => {
    if (this.state.loading) return;
    const container = this.getScrollParent();
    if (!container) return;
    const { height } = container.getBoundingClientRect();
    const { scrollHeight, scrollTop } = container;
    const bottom = scrollTop + height;
    const { loadPixelsInAdvance } = this.props;
    const advance = bottom - scrollHeight + loadPixelsInAdvance;
    if (advance > 0) {
      this.setState({ loading: true }, () =>
        Promise.resolve({ advance, bottom, scrollHeight, height, scrollTop, loadPixelsInAdvance })
        .then(this.props.loadMore || this.loadMoreUsingRelay)
        .then(
          () => this.setState({ loading: false }), // technically could recall checkScroll here. in second callback of setState. fork it, try it, adapt it !
          e => (console.warn(e), this.setState({ loading: false }))
        ));
    }
  };

  render () {
    return this.props.children;
  }
}
```


This is a **possible implementation** of this problem. You might want to add more things based on your need, for instance you could automatically renders a loading spinner, and many needs might vary. Please try it, fork it, give feedback :)

It is also possible to implement it as a High Order Component (HOC): https://github.com/facebook/relay/issues/1377.