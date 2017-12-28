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

### Boostrap
Use className instead of class to display bootstrap changes
```
ReactDOM.render(<div className="btn btn-info">Test</div>,document.getElementById("part2"));
```

### Event
```
<script type="text/babel">
    var Paragraph = React.createClass({
        comment:function(){
            alert('Clicked');
        },
        render:function(){
            return(
                <div>
                    <button onClick={this.comment} className="btn btn-danger">Cancel</button>
                    <button className="btn btn-info">Alert</button>
                </div>
            );
        }
    });
    ReactDOM.render(<div><Paragraph/></div>,document.getElementById("root"));
</script>
```

### External JS file
Simply refer the js file as following.
```
<script type="text/babel" src="{% static "react_part2.js" %}"></script>
```

### Django variable to JS
Refer the dhango variable before calling the js file , like this
```
<script>var my_var = "{{ person }}";</script>
<script type="text/babel" src="{% static "react_part2.js" %}"></script>
```
Then you can use the variable as <b>{variable_name}</b> in the js file.
