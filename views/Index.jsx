const React = require('react');



class Index extends React.Component{
    render(){
        const {notes} = this.props
        return(
                <body>
                    <div>
                        <h1>this is index</h1>
                        <p>here it is again!</p>
                        <a href="/new">New</a>
                        <ul>
                        {
                        notes.map((note, index) =>{
                           return(

                               <li>{note.body}
                                                              <form action={`/${note._id}/delete?_method=DELETE`} method="POST">
                                   <input type="submit" value="delete"/>
                               </form></li>

                           )
                        })
                        }
                        </ul>
                    </div>
                </body>
        )
    }
}











module.exports = Index;