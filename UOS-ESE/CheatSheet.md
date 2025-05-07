Here's a concise **Obsidian Cheatsheet** with essential commands, syntax, and workflows:

---

### **Basics**
- **Create Note**: `Ctrl/Cmd + N`  
- **Quick Open**: `Ctrl/Cmd + O`  
- **Command Palette**: `Ctrl/Cmd + P`  
- **Vault**: A folder containing all your notes and settings.

---

### **Formatting with Markdown**
- **Bold**: `**text**`  
- *Italic*: `*text*`  
- `Code`: `\`code\``  
- [Link](https://obsidian.md): `[text](URL)`  
- **Internal Link**: `[[Note Name]]` (Wikilink)  
- **Embed Note/File**: `![[Note Name]]`  
- **Headings**: `# H1`, `## H2`, ..., `###### H6`  
- **Lists**: `-` or `*` for bullets, `1.` for numbers.  
- **Checkbox**: `- [ ]` or `- [x]`.

---

### **Navigation & Search**
- **Backlinks**: `Ctrl/Cmd + Click` a link or check the right sidebar.  
- **Graph View**: `Ctrl/Cmd + G` to visualize connections.  
- **Search**: `Ctrl/Cmd + F` (in note) or `Ctrl/Cmd + Shift + F` (global).  
- **Search Syntax**:  
  - `tag:#tag` (search tags)  
  - `path:"folder"` (search in folder)  
  - `"exact phrase"`.

---

### **Advanced Features**
1. **Block References**:  
   - Add `^` after a heading or block: `## Heading ^unique-id`  
   - Reference it: `[[Note Name#^unique-id]]`.
2. **Tags**: `#tag` (use in notes for organization).  
3. **Frontmatter** (YAML metadata):  
   ```markdown
   ---
   title: Note
   tags: [todo, docs]
   ---
   ```
4. **Templates**: Use the **Templater** plugin for dynamic content.  
5. **Dataview Plugin**: Query notes like a database:  
   ```sql
   ```dataview
   LIST FROM #todo AND !#done
   ```
   ```

---

### **Plugins (Popular)**
1. **Templater**: Create dynamic templates.  
2. **Dataview**: Query notes with JS-like syntax.  
3. **Excalidraw**: Embed sketches/diagrams.  
4. **Calendar**: Link daily notes to a calendar.  
5. **Kanban**: Manage tasks in boards.  

---

### **Shortcuts**
| Action                | Windows/Linux       | macOS               |
|-----------------------|---------------------|---------------------|
| New note              | `Ctrl + N`          | `Cmd + N`           |
| Open command palette  | `Ctrl + P`          | `Cmd + P`           |
| Toggle sidebar        | `Ctrl + Shift + L`  | `Cmd + Shift + L`   |
| Toggle dark mode      | `Ctrl + Shift + D`  | `Cmd + Shift + D`   |
| Split view            | `Ctrl + Shift + \`  | `Cmd + Shift + \`   |

---

### **Tips**
- **Daily Notes**: Use the **Daily Notes** plugin for journaling.  
- **MOCs (Maps of Content)**: Create index notes linking to related content.  
- **Aliases**: Add alternate names in frontmatter for better searchability.  
- **Folders vs. Tags**: Use folders for hierarchy, tags for cross-note connections.  

---

Save this cheatsheet in Obsidian for quick reference! 🚀