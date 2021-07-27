import React, {useState} from "react";

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

import './styles.css'
const RichText = () => {
  const [convertedText, setConvertedText] = useState("Some default content");

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }], 
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  }

  return (
    <div className="RichText-main">
      <ReactQuill
        theme='snow'
        modules={modules}
        value={convertedText}
        onChange={setConvertedText}
      />
      {/* <br/><br/>
      <div dangerouslySetInnerHTML={{__html: convertedText}}></div> */}
    </div>
  )
}

export default RichText
