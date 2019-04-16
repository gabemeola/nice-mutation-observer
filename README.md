# nice-mutation-observer
Mutation Observer with a nicer api


## Usage
```js
// Install on Element prototype
import 'nice-mutation-observer/install';

const el = document.getElementById('app');

const config = { attributes: true, childList: true, characterData: true }
const disconnect = el.observe('childList', config, (mutation) => {
  console.log('change!', mutation)
})

// Disconnect
disconnect();
```

### Without global prototype
```js
// Install on Element prototype
import observe from 'nice-mutation-observer';

const el = document.getElementById('app');

const config = { attributes: true, childList: true, characterData: true }
const disconnect = observe(el, 'childList', config, (mutation) => {
  console.log('change!', mutation)
})

// Disconnect
disconnect();
```