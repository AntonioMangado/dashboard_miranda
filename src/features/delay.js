export function delayData(data, delay = 200) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, [delay])
    });
}