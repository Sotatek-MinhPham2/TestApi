export const sleepInSeconds = (timeout: number) =>
    new Promise<void>((res) => {
        setTimeout(() => {
            res();
        }, timeout * 1000);
    });
