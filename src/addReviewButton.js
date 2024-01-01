import config from "./config";

const addReviewButton = (listener) => {
    if ($('button.--lcandy2-xyb-auto-review').length) return; // 防止重复添加

    const $topContent = $('div.contentItem div.topContent');

    const $topContent_item = $topContent.children().eq(1);
    const $reviewButton = $(`<button type="button" class="el-button submitBtn el-button--default --lcandy2-xyb-auto-review"><i class="el-icon-edit" /><span> 一键评价 </span></button>`);
    $reviewButton.on('click', () => {
        config.autoSubmit = false;
        listener();
    });
    const $reviewAndSubmitButton = $(`<button type="button" class="el-button submitBtn el-button--primary --lcandy2-xyb-auto-review"><i class="el-icon-check" /><span> 评价并<b>提交</b> </span></button>`);
    $reviewAndSubmitButton.on('click', () => {
        config.autoSubmit = true;
        listener();
    });
    $topContent_item.append($reviewButton);
    $topContent_item.append($reviewAndSubmitButton);
    console.log('Add Review Button', $reviewButton);
}

export default addReviewButton;