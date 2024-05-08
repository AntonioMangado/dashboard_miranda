export function delayData(data: any, delay: number = 200): Promise<any> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, [delay])
    });
}