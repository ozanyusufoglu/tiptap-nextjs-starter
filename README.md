# Tiptap and Next.js integration

This is an example implementation of _Tiptap Rich_ text editor with **Next.js** and **Tailwind**. You could use it as a starter boilerplate for your text based projects.

In it’s simplest form, it’s enough to add Starterkit extension which enables many rich text editor features such as bold, bulletlist. etc

---

Steps to install are below, see documents for more detail

https://tiptap.dev/docs/editor/getting-started/install/nextjs

Install Next.js and Tiptap Packages.

```bash
# create a project
npx create-next-app my-tiptap-project

# change directory
cd my-tiptap-project

# install dependencies
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit

```

Create the Tiptap editor component

```jsx
"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
```

Integrate it to your app

```jsx
import Tiptap from "../components/Tiptap";

export default function Home() {
  return <Tiptap />;
}
```

---

Here are some extras I added to Starterkit,

1. I added the Link extension to show how to enable features which are not available in the Starterkit packet. You need to install extensions first, like below

   `npm install @tiptap/extension-link`

2. I added the Global Drag Handle package, which is a community extension, to be able to drag and drop nodes in your editor in a similar fashion to Notion ;) Check the repo for installation details. Kudos and thanks to the contributors
   - [_https://github.com/NiclasDev63/tiptap-extension-global-drag-handle_](https://github.com/NiclasDev63/tiptap-extension-global-drag-handle*)
3. You could see that a Bubble Menu pops up when you select a piece of text in the editor, check documentation for more menu options. Basically a fixed menu or bubble menu or floating menu, they all work with the same children button elements.

   https://tiptap.dev/docs/editor/core-concepts/extensions

4. You could find “is-active”, “not-active” and “drag-handle” classes in the global.css file inside your `app/` root folder.
5. To reach the content of the rendered content in the editor, you could use .getHtml() or .getJSON() methods on editor object.

```jsx
const content = editor.getHtml();
```
