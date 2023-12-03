export type UploadDocumentResponse = {
	success: boolean;
	errors: unknown;
	documentId: string;
	documentName: string;
	documentExtention: string;
}