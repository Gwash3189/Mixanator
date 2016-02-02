# Mixanator
Mixins with function composition


# Usage
```JavaScript
import { mix } from 'mixanator';

const User = mix(({ name }) => ({ name, updatedAt: new Date() }))

const Student = User.extend(({ name, id }) => ({ ...user, id, }))

//...

const u = User({name: 'Adam'}) // { name: 'adam' }
const s = Student({ name: 'Adam', id: 12 }) // { name: adam, id: 12 }

```
