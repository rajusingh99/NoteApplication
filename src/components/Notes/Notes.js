import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { NoteContext, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../NoteContext";
import Note from "./Note";
import "./Notes.css";

function Notes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const history = useHistory();
  const {
    notes,
    currentUser,
    showEditModal,
    showDeleteModal,
    selectedNote,
    addNote,
    updateNote,
    deleteNote,
    showEditModal: showEditModalAction,
    hideEditModal,
    showDeleteModal: showDeleteModalAction,
    hideDeleteModal,
    setSelectedNote,
  } = useContext(NoteContext);

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      // Create a new note object
      const newNote = {
        id: Date.now(),
        title,
        content,
        author: currentUser,
      };

      // Add the new note to the notes array
      addNote(newNote);

      // Clear the form inputs
      setTitle("");
      setContent("");
    }
  };

  const handleEditNote = () => {
    // Update the selected note object with the new title and content
    const updatedNote = {
      ...selectedNote,
      title,
      content,
    };

    // Update the note in the notes array
    updateNote(updatedNote);

    // Close the edit modal
    hideEditModal();

    // Clear the form inputs
    setTitle("");
    setContent("");
  };

