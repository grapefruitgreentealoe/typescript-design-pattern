import { ClientDataItem } from "./client";

export class Server {
  store: DataStore = {
    timestamp: 0,
    items: Object.create(null),
  };
  synchronize(request: SyncingRequest): SyncingResponse {
    let lastTimestamp = request.timestamp;
    let now = Date.now();
    let serverChanges: ServerChangeMap = Object.create(null);

    let items = this.store.items;

    for (let id of Object.keys(items)) {
      let item = items[id];
      if (item.timestamp > lastTimestamp) {
        serverChanges[id] = item.value;
      }
    }

    return {
      timestamp: now,
      changes: serverChanges,
    };
  }
}

export interface DataStore {
  timestamp: number;
  items: {
    [id: string]: ClientDataItem;
  };
}

export interface DataSyncingInfo {
  timestamp: number;
  data: string;
}

export interface ServerDataItem {
  id: string;
  timestamp: number;
  value: string;
}

export interface ServerDataStore {
  items: {
    [id: string]: ServerDataItem;
  };
}
export interface SyncingRequest {
  timestamp: number;
}

export interface SyncingResponse {
  timestamp: number;
  changes: {
    [id: string]: string;
  };
}
