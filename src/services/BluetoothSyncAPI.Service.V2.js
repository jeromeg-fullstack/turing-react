export default class BluetoothSyncAPIService {
	static BLUETOOTH_SYNC_API = "https://randomuser.me/api/?results=1000";
	static MAX_RETRIES = 3;

	static fetchWithRetry(url, retries = 0) {
		return fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.catch((error) => {
				if (retries < this.MAX_RETRIES) {
					return this.fetchWithRetry(url, retries + 1);
				} else {
					throw new Error("Failed to sync data");
				}
			});
	}

	static sync() {
		return new Promise((resolve, reject) => {
			this.fetchWithRetry(this.BLUETOOTH_SYNC_API)
				.then((data) => {
					if (data) {
						const { results } = data;
						resolve(results);
						// resolve({results: []})
					}
					resolve({ results: [] });
				})
				.catch((error) => {
					reject(error.message);
				});
		});
	}
}
