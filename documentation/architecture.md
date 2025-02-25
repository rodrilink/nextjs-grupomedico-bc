# Project Architecture Documentation

## Layer Architecture Diagram

```mermaid
graph TD
    A[Presentation] --> B[Controllers]
    B --> C[Use Cases]
    C --> D[Infrastructure]
    D --> E[Domain]
    E --> C
```

# Architecture Overview

## Layers

1. **Presentation**: React components (Atomic Design)
2. **Controllers**: Route handlers and server actions
3. **Use Cases**: Business logic implementation
4. **Infrastructure**: Database implementations, external services
5. **Domain**: Business models and repository interfaces
