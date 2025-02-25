# Dependency Flow

```mermaid
graph TD
A[app/*] --> B[application/*]
B --> C[domain/*]
C --> D[infrastructure/*]
D -->|implements| C
```
