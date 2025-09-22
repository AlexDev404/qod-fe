import HealthCheckResponse from './types/healthcheck';
export type { HealthCheckResponse };
class API {
	base: string;
	version: string;

	constructor(base: string, version: string) {
		this.base = base;
		this.version = version;
	}

	private async fetchJSON<T>(url: string): Promise<T> {
		const response = await fetch(this.base + this.version + url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	}

	async healthcheckPing(): Promise<HealthCheckResponse | null> {
		try {
			return await this.fetchJSON<HealthCheckResponse>('/healthcheck/');
		} catch (error) {
			console.error('Error fetching healthcheck:', error);
			return null;
		}
	}
}

export { API as New };
