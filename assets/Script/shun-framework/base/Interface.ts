export interface Idispose {
    dispose(): void;
}
export interface IUi {
    onOpen?(data?: any): void;

    onClose?(): void;

    close(): void;
}