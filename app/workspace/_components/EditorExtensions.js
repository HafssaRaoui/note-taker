import Strike from '@tiptap/extension-strike'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Code2Icon, Heading1, Heading1Icon, Heading2, Heading3, Highlighter, Italic, List, Strikethrough, Underline } from 'lucide-react'
import React from 'react'

function EditorExtensions({ editor }) {
    return editor && (
        <div className='p-5 '>

            <div className="control-group">

                <div className="button-group flex gap-3">

                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'text-blue-500' : ''}
                    >
                        <Heading1 />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}
                    >
                        <Heading2 />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}
                    >
                        <Heading3 />
                    </button>



                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? 'text-blue-500' : ''}
                    >
                        <Bold />
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'text-blue-500' : ''}
                    >
                        <Italic />
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        className={editor.isActive('code') ? 'text-blue-500' : ''}
                    >
                        <Code2Icon />
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={editor.isActive('highlight') ? 'text-blue-500' : ''}
                    >
                        <Highlighter />
                    </button>

                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={editor.isActive('underline') ? 'text-blue-500' : ''}
                    >
                        <Underline />
                    </button>


                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={editor.isActive('strike') ? 'text-blue-500' : ''}
                    >
                        <Strikethrough />
                    </button>


                   


                    <button
                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                        className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : ''}
                    >
                        <AlignLeft />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                        className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : ''}
                    >
                        <AlignCenter />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                        className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : ''}
                    >
                        <AlignRight />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                        className={editor.isActive({ textAlign: 'justify' }) ? 'text-blue-500' : ''}
                    >
                        <AlignJustify />
                    </button>


                </div>
            </div>



        </div>

    )
}

export default EditorExtensions