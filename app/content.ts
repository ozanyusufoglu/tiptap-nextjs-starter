const content = `<h1>Tiptap and Next.js integration</h1><p>This is an example implementation of <em>Tiptap Rich</em> text editor with <strong>Next.js</strong> and <strong>Tailwind</strong>. You could use it as a starter boilerplate for your text based projects.</p><p>In it’s simplest form, it’s enough to add Starterkit extension which enables many rich text editor features such as bold, bulletlist. etc</p><hr><p>Steps to install are below, see documents for more detail</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/docs/editor/getting-started/install/nextjs">https://tiptap.dev/docs/editor/getting-started/install/nextjs</a></p><p>Install Next.js and Tiptap Packages.</p><pre><code class="language-bash"># create a project
npx create-next-app my-tiptap-project

# change directory
cd my-tiptap-project

# install dependencies
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit

</code></pre><p>Create the Tiptap editor component</p><pre><code class="language-jsx">'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () =&gt; {
const editor = useEditor({
extensions: [StarterKit],
content: '&lt;p&gt;Hello World! 🌎️&lt;/p&gt;',
})

return &lt;EditorContent editor={editor} /&gt;
}

export default Tiptap
</code></pre><p>Integrate it to your app</p><pre><code class="language-jsx">import Tiptap from '../components/Tiptap'

export default function Home() {
return &lt;Tiptap /&gt;
}
</code></pre><hr><p>Here are some extras for more options,</p><ul><li><p>The Link is not available in the Starterkit packet. You need to install the extensions first then import into Tiptap component. Just follow the same pattern for other official extensions.</p><p><code>npm install @tiptap/extension-link</code></p></li><li><p>To be able to drag and drop nodes in your editor in a similar fashion to Notion you need Drag extension, which is paid. But you are not limited to official extensions, I added Global Drag Handle, which is a community extension to make it possible. Check the repo for installation details:</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/NiclasDev63/tiptap-extension-global-drag-handle*"><em>https://github.com/NiclasDev63/tiptap-extension-global-drag-handle</em></a></p></li></ul></li><li><p>You could see that a Bubble Menu pops up when you select a piece of text and there are a few menu options more. Basically a fixed menu, bubble menu or floating menu, they all work with the same children button elements, you just change the parent element.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/docs/editor/core-concepts/extensions">https://tiptap.dev/docs/editor/core-concepts/extensions</a></p></li><li><p>You could find “is-active”, “not-active” and “drag-handle” classes in the global.css file inside your <code>app/</code> root folder.</p></li><li><p>To reach the content of the rendered content in the editor, you could use <code>.getHTML()</code> or <code>.getJSON()</code> methods on editor object.</p></li></ul><pre><code class="language-jsx">const content = editor.getHTML()
or 
const content = editor.getJSON(
</code></pre>`;

export default content;
