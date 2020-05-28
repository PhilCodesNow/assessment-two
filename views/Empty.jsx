const React = require('react');



class Empty extends React.Component{
    render(){
        const {notes} = this.props
        return(
                <body>
                    <div>
                        <h1>this is index</h1>
                        <p>No Notes are Written yet</p>
                        <a href="/new">New</a>
                        
                    </div>
                </body>
        )
    }
}











module.exports = Empty;