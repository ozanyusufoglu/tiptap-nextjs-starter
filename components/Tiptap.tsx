"use client";

import { useCallback } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import content from "@/app/content";

import GlobalDragHandle from "tiptap-extension-global-drag-handle";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      GlobalDragHandle.configure({
        dragHandleWidth: 20, // default

        // The scrollTreshold specifies how close the user must drag an element to the edge of the lower/upper screen for automatic
        // scrolling to take place. For example, scrollTreshold = 100 means that scrolling starts automatically when the user drags an
        // element to a position that is max. 99px away from the edge of the screen
        // You can set this to 0 to prevent auto scrolling caused by this extension
        scrollTreshold: 100, // default

        // The css selector to query for the drag handle. (eg: '.custom-handle').
        // If handle element is found, that element will be used as drag handle.
        // If not, a default handle will be created
        dragHandleSelector: ".custom-drag-handle", // default is undefined
      }),
    ],
    content: content, // content is the html content of the editor that you edit, since it's a little bit long I imported it from a file
    editorProps: {
      attributes: {
        class:
          "border-2 border-black overflow-y-auto bg-white shadow-xl h-[700px] w-[1000px] mx-auto px-40 py-12 rounded-xl prose prose-slate max-w-none prose-p:m-0 focus:outline-red ",
      },
    },
  });

  const contentHtml = editor?.getHTML();
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  console.log(contentHtml);

  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="flex flex-row w-[1000px] flex-wrap gap-2  mx-auto">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          className={editor?.isActive("bold") ? "is-active" : "not-active"}
        >
          bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          className={editor?.isActive("italic") ? "is-active " : "not-active"}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : "not-active"}
        >
          Strike
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor?.isActive("code") ? "is-active" : "not-active"}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          className={
            editor?.isActive("bulletList") ? "is-active" : "not-active"
          }
        >
          bulletList
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : "not-active"}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : "not-active"}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : "not-active"}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : "not-active"}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="not-active"
        >
          Clear marks
        </button>
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className="not-active"
        >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : "not-active"}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "is-active"
              : "not-active"
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "is-active"
              : "not-active"
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "is-active"
              : "not-active"
          }
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? "is-active"
              : "not-active"
          }
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? "is-active"
              : "not-active"
          }
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? "is-active"
              : "not-active"
          }
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : "not-active"}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList") ? "is-active" : "not-active"
          }
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : "not-active"}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : "not-active"}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="not-active"
        >
          Horizontal rule
        </button>
        <button
          className="not-active"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Hard break
        </button>
        <button
          className="not-active"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          className="not-active"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </button>
        {editor && (
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className=" bg-white rounded-xl border-black border-2 p-2 shadow-xl"
          >
            <div className="bubble-menu flex flex-row gap-4 ">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
              >
                Bold
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
              >
                Italic
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
              >
                Strike
              </button>
            </div>
          </BubbleMenu>
        )}
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
