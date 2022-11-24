import { DataStore, Server } from "./server";

export class Client {
  store: ClientDataStore = {
    timestamp: 0,
    items: Object.create(null),
  };
  constructor(public server: Server) {}
  synchronize(): void {
    let store = this.store;
    let response = this.server.synchronize({
      timestamp: store.timestamp,
    });
    let clientItems = store.items;
    let serverChanges = response.changes;

    for (let id of Object.keys(serverChanges)) {
      clientItems[id] = {
        id,
        value: serverChanges[id],
      };
    }

    store.timestamp = response.timestamp;
  }
}

export interface ClientDataItem {
  id: string;
  value: string;
}

export interface ClientDataStore {
  timestamp: number;
  items: {
    [id: string]: ClientDataItem;
  };
  changed: {
    [id: string]: number;
  };
}
