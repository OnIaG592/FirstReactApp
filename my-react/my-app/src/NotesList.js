import React from "react";


class NotesList  extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
        <div style={{display:"flex",justifyContent:"flex-end" , flexDirection:"column"}}>
            {this.props.list.map((el)=>
            <div className="createdNotes" style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <ul>
                    <li>
                      {el.titleText}
                   </li>
                   <li>
                     {el.text}
                   </li>
                </ul>
                <button style={{backgroundColor:"green" , color:"white"}} onClick={()=>{this.props.editNote(el.id)}}>Edit</button>
                <button style={{backgroundColor:"red" , color:"white"}} onClick={() =>{this.props.deleteNote(el)}}>Delete</button>
            </div>)}
        </div>
    )}
}

export default NotesList;