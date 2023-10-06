export function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Tạo số ngẫu nhiên từ 0 đến i
        [array[i], array[j]] = [array[j], array[i]]; // Swap phần tử tại vị trí i và j
    }
    return array;
}
