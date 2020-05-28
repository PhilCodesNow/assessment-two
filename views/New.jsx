const React = require('react');



class New extends React.Component{
    render(){
        return(
            <html>
                <body>
                    <div>
                        <h1>this is New page</h1>
                        <div>
                            <form action="/" method="POST">
                                <input type="text" name="body"/>
                                <input type="submit" value="New Note"/>
                            </form>
                        </div>
                        <a href='/'> Back</a>
                    </div>
                </body>
            </html>
        )
    }
}











module.exports = New;