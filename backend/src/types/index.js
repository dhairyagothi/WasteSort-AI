export interface WasteManagementRequest {
    userId: string;
    wasteType: string;
    quantity: number;
    location: {
        latitude: number;
        longitude: number;
    };
}

export interface WasteManagementResponse {
    success: boolean;
    message: string;
    data?: any;
}