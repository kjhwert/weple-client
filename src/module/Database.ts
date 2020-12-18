import SQLite from 'react-native-sqlite-storage';

interface IInsert {
  records: Array<number>;
}

interface IDatabase {
  transaction: Function;
}

interface IInstance {
  getRecords: Function;
  insertRecord: Function;
  deleteRecord: Function;
}

export class Database {
  private static instance: IInstance | null = null;
  private db: IDatabase | null = null;
  private records = [];

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new Database();
    }

    return this.instance;
  }

  constructor() {
    if (Database.instance) {
      throw new Error('database is already exist');
    }

    this.db = SQLite.openDatabase(
      {name: 'relieve', createFromLocation: '~relieve.db', location: 'Library'},
      (success) => {},
      (error) => {
        console.log(error);
      },
    );
  }

  getRecords = (callback: Function) => {
    this.db?.transaction(
      (tx) => {
        tx.executeSql('SELECT * FROM record', [], (tx, results) => {
          callback(results.rows.raw());
        });
      },
      (error) => console.log(error),
    );
  };

  insertRecord = (records: IInsert) => {
    const recordsToJson = JSON.stringify(records);
    this.db?.transaction(
      (tx) => {
        tx.executeSql(
          `insert into record(records) values ('${recordsToJson}')`,
          [],
          () => {},
        );
      },
      (error) => {
        console.log('insert error', error);
      },
    );
  };

  deleteRecord = () => {
    this.db?.transaction(
      (tx) => {
        tx.executeSql(`delete from record where 1=1`, [], () => {});
      },
      (error) => console.log(error),
    );
  };

  insertNotification = () => {};

  readNotification = () => {};

  getNotifications = () => {};
}
