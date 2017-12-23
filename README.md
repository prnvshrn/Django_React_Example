# Django_React_Example

## Steps
1. Step 1
Create a Django project as usual

2. Use CDN to integrate React JS. Add the following to your html
```
<script src="//fb.me/react-0.14.3.min.js"></script>
<script src="//fb.me/react-dom-0.14.3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

## React JS Hacks
### Simple skeleton
```
<script type="text/babel">
var CommentBox = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome</h1>
            </div>
        );
    }
});
ReactDOM.render(<CommentBox/>, document.body);
</script>
```
### Multiple components
```
<script type="text/babel">
    var Paragraph = React.createClass({
        render:function(){
            return(
                <div>
                    <h2>Hello there</h2>
                    <h2>This is a sample</h2>
                </div>
            );
        }
    });
    ReactDOM.render(<div><Paragraph/><Paragraph/></div>,document.getElementById("root"));
</script>
```

### Props and events
