# Mixanator
Mixins with function composition


# Usage 
```JavaScript
import { mix } from 'mixanator';

const User = mix((name) => ({ name }))

const Student = User.extend((user, id) => ({ ...user, id }))

//...

const u = User('Adam') // { name: 'adam' }
const s = Student('Adam', 12) // { name: adam, id: 12 }

```
