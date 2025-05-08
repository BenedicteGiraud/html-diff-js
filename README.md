# html-diff

A lightweight JavaScript library to highlight changes between two HTML strings. It wraps inserted content with `<ins>` tags and deleted content with `<del>` tags, making it ideal for visualizing diffs in rich text content.

---

## 🚀 Features

- 🔍 Detects and highlights changes between two HTML strings
- 🧩 Wraps insertions in `<ins>` and deletions in `<del>`
- ⚡ No external dependencies
- ✅ Works in both browser and Node.js environments

## 🌐 Demo

You can see a live demo of html-diff in action here: [Demo](https://benedictegiraud.github.io/html-diff-js/)

## 📦 Installation

Install via npm:

```bash
npm install @benedicte/html-diff
```

## 🛠️ API

```ts
htmlDiff(htmlBefore: string, htmlAfter: string): string
```

Parameters:

- `htmlBefore` (_required_) – Original HTML string
- `htmlAfter` (_required_) – Updated HTML string

Returns the resulting HTML string with:

- Inserted content is wrapped in <ins> tags
- Deleted content is wrapped in <del> tags

## 💡 Examples

```ts
import { htmlDiff } from '@benedicte/html-diff';

const before = '<p>Hello world!</p>';
const after = '<p>Hello brave new world</p>';
const result = htmlDiff(before, after);

console.log(result);
// Output: <p>Hello <ins>brave new </ins>world<del>!</del></p>
```

## 🔒 License

MIT

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome! Feel free to open an issue or submit a pull request.
