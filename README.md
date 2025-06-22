### Hexlet tests and linter status:

[![Actions Status](https://github.com/deniskolomoyets/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/deniskolomoyets/qa-auto-engineer-javascript-project-87/actions)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=deniskolomoyets_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=deniskolomoyets_qa-auto-engineer-javascript-project-87)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=deniskolomoyets_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=deniskolomoyets_qa-auto-engineer-javascript-project-87)

## 📦 Example usage

### 📄JSON

To compare two flat JSON files, run the utility and pass the file paths as arguments.  
You can use both full and relative paths.

```bash
gendiff file1.json file2.json
```

[![asciicast](https://asciinema.org/a/lARuZRxPDGsR8M2v5IH7zcXpA.svg)](https://asciinema.org/a/lARuZRxPDGsR8M2v5IH7zcXpA)

---

### ⚙️YML

To compare two flat YAML files, run the utility and pass the YAML file paths as arguments.
You can use both full and relative paths.

```bash
gendiff file1.yml file2.yml
```

[![asciicast](https://asciinema.org/a/5n33tNYHs4uURot0EWCUZUxPq.svg)](https://asciinema.org/a/5n33tNYHs4uURot0EWCUZUxPq)

---

### 📜 Plain Format

To display the differences in plain text format (suitable for logs or plain output), use the --format plain option:

```bash
gendiff --format plain file1.yml file2.yml
```

[![asciicast](https://asciinema.org/a/uZA1VH2qLbNdGu01kzlTQGAZF.svg)](https://asciinema.org/a/uZA1VH2qLbNdGu01kzlTQGAZF)

---

### 🧾 JSON Output

To get machine-readable structured diff, use JSON format:

```bash
gendiff --format json file1.json file2.json
```

[![asciicast](https://asciinema.org/a/MgGySMVvL4LIppYVFcWkpsxAO.svg)](https://asciinema.org/a/MgGySMVvL4LIppYVFcWkpsxAO)

---
