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
</code></pre><hr><p>Here are some extras I added to Starterkit,</p><ol><li><p>I added the Link extension to show how to enable features which are not available in the Starterkit packet. You need to install extensions first, like below</p><p><code>npm install @tiptap/extension-link</code></p></li><li><p>I added the Global Drag Handle package, which is a community extension, to be able to drag and drop nodes in your editor in a similar fashion to Notion ;) Check the repo for installation details. Kudos and thanks to the contributors</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/NiclasDev63/tiptap-extension-global-drag-handle*"><em>https://github.com/NiclasDev63/tiptap-extension-global-drag-handle</em></a></p></li></ul></li><li><p>You could see that a Bubble Menu pops up when you select a piece of text in the editor, check documentation for more menu options. Basically a fixed menu or bubble menu or floating menu, they all work with the same children button elements.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/docs/editor/core-concepts/extensions">https://tiptap.dev/docs/editor/core-concepts/extensions</a></p></li><li><p>You could find “is-active”, “not-active” and “drag-handle” classes in the global.css file inside your <code>app/</code> root folder.</p></li><li><p>To reach the content of the rendered content in the editor, you could use</p></li></ol><pre><code class="language-jsx">const content = editor.getHtml()
</code></pre>`;

export default content;
