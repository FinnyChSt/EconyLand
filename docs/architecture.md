## Architecture of the EconyLand project

### Design

Overview:

```mermaid
graph TD
    FE[Frontend React] --> B1[Backend Next.js - TypeScript]
    FE[Frontend React] --> B2[Backend C#]

    B1[Backend Nest.js - TypeScript] --> SQL1[(PostgreSQ)]
    B1[Backend Nest.js - TypeScript] --> NoSQL1[(MongoDB)]

    B2[Backend C#] --> SQL1[(MariaDB)]
    B2[Backend C#] --> NoSQL1[(MongoDB)]
```
