# react-yarf

This small React library is made to simplify most common use cases of CSS flexbox. Flexbox properties can be tricky sometimes, it happens because flexboxes allow to do a lot of things,
even you don't need them, usually you just want to "put these `div`s in one row".

`react-yarf` library simplifies flexbox usage.

## Project features

- I didn't want to redefine default flexbox behaviour so all defaults are the same as they are in original CSS flexbox specification.
- You can specify any tag or other React component using `as` property, it is convenient when you want to flexify items other than `div`s. This helps to get rid from extra nodes in your DOM tree.
- Unfortunately this library is really young and all styles are specified as `style` attribute of HTML tags. May be this will be changed in future releases.

## Examples

### Row layout

#### Horizontal center & vertical center

```jsx
<FlexRow hAlign='center' vAlign='center'>
    <FlexItem>A</FlexItem>
    <FlexItem as='strong'>Strong text!</FlexItem>
    <FlexItem as='h2'>Big text!</FlexItem>
</FlexRow>
```

#### Horizontal right & vertical bottom

```jsx
<FlexRow hAlign='right' vAlign='bottom'>
    <FlexItem>A</FlexItem>
    <FlexItem as='strong'>Strong text!</FlexItem>
    <FlexItem as='h2'>Big text!</FlexItem>
</FlexRow>
```

### Column layout

#### Horizontal center & vertical bottom

```jsx
<FlexColumn hAlign='center' vAlign='bottom' style={{height: 130}}>
    <FlexItem className='flexItem'>A</FlexItem>
    <FlexItem className='flexItem' as='h1'>🐷</FlexItem>
</FlexColumn>
```
