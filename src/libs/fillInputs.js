const fillInputs = (inputElement, data) => {
    const event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    inputElement.focus();

    data.split('').forEach(char => {
        // 创建键盘事件
        let keydownEvent = new KeyboardEvent('keydown', { key: char, bubbles: true });
        let keyupEvent = new KeyboardEvent('keyup', { key: char, bubbles: true });
        let inputEvent = new Event('input', { bubbles: true });

        // 触发键盘事件
        inputElement.dispatchEvent(keydownEvent); // 使用原生方法触发事件
        inputElement.value += char; // 使用原生属性更改值
        inputElement.dispatchEvent(inputEvent);
        inputElement.dispatchEvent(keyupEvent);
    });

    inputElement.blur();
}
export default fillInputs;
