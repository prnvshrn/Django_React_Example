var Movie = React.createClass({
    render:function(){
            return(
                <div>
                    <h2>Hello there</h2>
                    <h2>This is a sample</h2>
                </div>
            );
        }
});
ReactDOM.render(<Movie/>,document.getElementById("part3"));

var Movie2 = React.createClass({
    render:function(){
            return(
                <div>
                    <h2>{my_var}</h2>
                    <h2>This is from Django</h2>
                </div>
            );
        }
});
ReactDOM.render(<Movie2 />,document.getElementById("part4"));
