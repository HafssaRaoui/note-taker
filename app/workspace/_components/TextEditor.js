import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import EditorExtensions from './EditorExtensions'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const TextEditor = ({fileId}) => {

    const notes = useQuery(api.notes.getNotes,{
      fileId :fileId
    })
    console.log(notes)

    useEffect(()=> {
      editor &&editor.commands.setContent(notes)

    }
      ,[notes])
   

    const editor = useEditor({
        extensions: [StarterKit,Placeholder.configure({
            // Use a placeholder:
            placeholder: 'Let the noting begin 😀'}),
            Highlight.configure({ multicolor: true }),
            Underline , Strike,
            Heading.configure({
                levels: [1, 2, 3],
              }),
              TextAlign.configure({
                types: ['heading', 'paragraph'],
              }),
              BulletList, OrderedList, ListItem],
        editorProps:{
            attributes:{
                class:'focus:outline-none h-screen p-5'
            }
           
        }
      })
    
  return (
    <div>

        <EditorExtensions editor={editor}/>
        <div className='overflow-scroll h-[88vh]'>
        <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TextEditor