// react imports
import React from "react";
import {useState} from 'react'

// core imports

// page imports

function Tags(props) {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState(sanitizer(props.value.split(',')));

  // remove useless stuff from the tags
  function sanitizer(t) {
    t = t.filter(Boolean)
    .map(function(e){
      // remove multiple white spaces from the tags
      return e.replace(/\s{2,}/g,' ').trim();
    })
    .filter(function(e) {
      // remove the white spaces only tags
      return /\S/.test(e);
    });

    return t;
  }

  function onChangeInput(e) {
    let {value} = e.target;

    // check if we pasted any tag list
    if(value.includes(',') || value.includes(';')) {
      addTag(e);
    } else {
      setInput(value);
    }
  }

  function removeTag(id) {
    let t = tags;
    
    // remove the tag
    t.splice(id, 1); 

    // update the tags list
    setTags([...t]);
  }

  function addTag(e) {
    let {value} = e.target;
    let {key} = e;

    if(key === "Enter" || key === "," || key === ";" || value.includes(',') || value.includes(';')) {
      e.preventDefault();
      
      // replace all ';' to ','
      value = value.replaceAll(';', ',');

      // clear the tags and remove duplicated values
      let t = sanitizer(value.split(','));

      // update the tags list
      setTags([...tags.concat(t)]);

      // clear the tag input box
      setInput('');
    } else if(key === "Backspace" && !value.length && tags.length) {
      e.preventDefault();

      setInput(tags.pop());
      setTags([...tags]);
    }
  }

  function clearTags() {
    let t = [];
    setTags([...t]);
  }

  return(
    <div>
      <span className='tags'>{tags.map((tag, index) => <span key={index} className='tag col-auto'>{tag}<i id={index} className='fas fa-times' onClick={() => removeTag(index)}></i></span>)}</span>
      <input type="text" value={input} className='col' placeholder={props.placeholder} onKeyDown={addTag} onChange={onChangeInput} />
    </div>
  )
}

export default Tags