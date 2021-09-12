import logo from './logo.svg';
import './App.css';
import React from 'react';
import NotesList from './NotesList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      id: 0,
      notes: [],
      title: "",
      onChangeText: "",
      changedItemId: 0,
    }
  }

  save_text = (event) => {
    this.setState({ onChangeText: event.target.value })
  }
  save_title = (event) => {
    this.setState({ title: event.target.value })
  }
  add_notes = () => {
    this.state.notes.push({
      id: this.state.id,
      titleText: this.state.title,
      text: this.state.onChangeText
    })
    this.setState({
      id: this.state.id + 1,
      title: "",
      onChangeText: ""
    });
  }

  editNote = (id) => {
    this.state.notes.forEach(item => {
      if (item.id == id) {
        this.setState({
          title: item.titleText,
          onChangeText: item.text,
          changedItemId: id,
          isDisabled: false
        })
      }
    })
  }
  save_notes = () => {
    let newNotes = this.state.notes.map(item => {
      if (this.state.changedItemId == item.id) {
        return {
          id:item.id,
          text: this.state.onChangeText,
          titleText: this.state.title
        }
      }
      else {
        return item
      }
    }
    )
    this.setState({
      notes:newNotes,
      title:'',
      onChangeText:'',
      isDisabled: true
    })
  }

  deleteNote = (deletedNote) => {
    let notDeletedItem = [];
    this.state.notes.forEach(item => {
      if (item.id !== deletedNote.id) {
        notDeletedItem.push(item);
      }
    })
    this.setState({
      notes: notDeletedItem
    })
  }

  render() {
    return (
      <div className="header">
        <h1 style={{ display: "flex", justifyContent: "center" }}>Welcome to your Notes</h1>
        <div className="mainDiv" style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="divText" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <input value={this.state.title} className="titleTextInput" onInput={this.save_title} type="textarea" placeholder="Type your Title"></input>
            <textarea value={this.state.onChangeText} className="mainTextInput" onInput={this.save_text} type="textarea" placeholder="Type your Text"></textarea>
            <button disabled={!(this.state.title && this.state.onChangeText && this.state.isDisabled)} style={{ backgroundColor: "green", borderRadius: "25px" }} onClick={this.add_notes}>Add</button>
            <button disabled={this.state.isDisabled} style={{ backgroundColor: "green", borderRadius: "25px" }} onClick={this.save_notes}>Save</button>
          </div>
          <div>
            <NotesList list={this.state.notes} editNote={this.editNote} deleteNote={this.deleteNote} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
