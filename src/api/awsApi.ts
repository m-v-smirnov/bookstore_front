import { instance } from ".";

export type S3LogsReqOptions = {
    userId: string,
    method: string,
    path: string,
    startDate: string,
    endDate: string
}

export const getLogsFromAwsS3 = async (options: S3LogsReqOptions): Promise<any> => {
    const response = await instance.get("/aws/get-logs", {
        params: options
    });
    return response
}