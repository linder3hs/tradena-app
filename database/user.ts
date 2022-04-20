import Realm, {open} from 'realm';

export const User = {
  name: 'User',
  properties: {
    _id: 'int',
    email: 'string',
    user_id: 'int',
    password: 'string',
    phoneNumber: 'string',
    phoneCode: 'string',
    name: 'string',
    googleId: 'string?',
  },
  primaryKey: '_id',
};

const databaseOptions = {
  path: 'database.realm',
  schema: [User],
  schemaVersion: 0, // optional
};

export const insertNewUser = (user: any) =>
  new Promise((resolve, reject) => {
    open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create('User', user);
          resolve(user);
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export const getUser = (id: any) =>
  new Promise((resolve, reject) => {
    open(databaseOptions)
      .then(realm => {
        const user = realm.objectForPrimaryKey('User', id);
        resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const deleteUser = (id: any) =>
  new Promise((resolve, reject) => {
    open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deleteTing = realm.objectForPrimaryKey('User', id);
          realm.delete(deleteTing);
          resolve(id);
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export const getAll = () =>
  new Promise((resolve, reject) => {
    open(databaseOptions)
      .then(realm => {
        const users = realm.objects('User');
        resolve(users);
      })
      .catch(error => {
        reject(error);
      });
  });

export const deleteAll = () =>
  new Promise((resolve, reject) => {
    open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let users = realm.objects('User');
          realm.delete(users);
          resolve(true);
          realm.close();
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export default new Realm(databaseOptions);
