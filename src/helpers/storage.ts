// There’s a few reasons we might want to store some data locally:

// The application is completely self contained and there is no interaction with other users, so all data can be stored locally
// We need to store data locally for some specific functionality like a “Remember Me” feature
// We could skip unnecessary calls to a server by storing preference settings locally
// We could skip unnecessary calls to a server by caching other data locally
// We want to sync online and offline data so that the user can continue using the application even when they are offline (Evernote is a good example of this)
// Temorary session token

const storage = window.localStorage;

// Wrapping storage methods in promises

export function get(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (storage) {
        const item = storage.getItem(key);
        resolve(JSON.parse(item))
      }
      resolve(undefined);
      } catch (err) {
        reject(`Couldn't get object: ${err}`)
      }
  })
}


export function set(key: string, value: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      storage && storage.setItem(key, JSON.stringify(value));
      resolve();
    } catch (err) {
      reject(`Couldnt store object ${err}`)
    }
  });
}


export function remove(key:string): Promise<void> {
  console.log("key: ", key)
  return new Promise((resolve, reject) => {
    try {
      storage && storage.removeItem(key);
      resolve();
    } catch (err) {
      reject(`Couldn't remove object ${err}`)
    }
  });
}



