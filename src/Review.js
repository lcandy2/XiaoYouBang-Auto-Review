import config from "./config"
import fillInputs from "./libs/fillInputs";
const Review = () => {
    const $allInput = $('input.el-input__inner');

    // 筛选出具有 max 和 min 属性的 input 元素
    const $dayInput = $allInput.filter((index, element) => {
        return $(element).attr('max') !== undefined && $(element).attr('min') !== undefined;
    });

    // 排除已经筛选的 $dayInput 元素，得到其它 input 元素
    const $otherInput = $allInput.not($dayInput);

    // 在 $otherInput 中进一步筛选出 placeholder 包含 '课程' 的 input 元素
    const $courseInput = $otherInput.filter((index, element) => {
        return $(element).attr('placeholder').includes('课程');
    });
    // $otherInput 现在包含既不是 $dayInput 也不是 $courseInput 的 input 元素

    // 筛选出所有的评分元素
    const $allRate = $('div.el-rate');

    const $allTextarea = $('textarea.el-textarea__inner');

    // 检查当前元素是否有建议文本
    const $suggestTextarea = $allTextarea.filter((index, element) => {
        return $(element).attr('placeholder').includes('建议');
    });

    // 否则，认为是评价文本
    const $otherTextarea = $allTextarea.filter((index, element) => {
        return !$(element).attr('placeholder').includes('建议');
    });

    // 筛选出所有的单选框
    const $allRadio = $('div.radioItem');

    // 执行评价
    $dayInput.each((index, element) => {
        fillInputs(element, config.day.toString());
    });
    
    $courseInput.each((index, element) => {
        fillInputs(element, config.addCourse);
    });
    
    $allRate.each((index, element) => {
        $(element).children().eq(config.rate - 1).trigger('click');
    });

    $otherTextarea.each((index, element) => {
        fillInputs(element, config.review);
    });

    $suggestTextarea.each((index, element) => {
        fillInputs(element, config.suggestions);
    });

    $allRadio.each((index, element) => {
        $(element).children().eq(config.radio).trigger('click');
    });
    console.log('Review success!');
}
export default Review;