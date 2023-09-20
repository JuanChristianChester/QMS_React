import React from 'react'
import { useDropzone } from 'react-dropzone'

function Dropzone () {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  })

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="file_dialouge">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop evidence here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Evidence</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  )
}

export default Dropzone
