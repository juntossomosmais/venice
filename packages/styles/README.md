# Styles

## About component's classes prefix

You should add a prefix before classes of all component to avoid conflict with another libraries or classes.

We are using CSS Modules but if the project that import Venice are using some global styles with the same class name, for example `.primary` it will have be a lot of conflict problems.

So to start a `<button>` component inside Venice, we are using:

```scss
.JSMButton {
}
```

And we should use BEM notation to add some customizations, as:

```scss
.JSMButton {
  &--primary {
  }
}
```
