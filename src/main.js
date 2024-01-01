import Review from "./Review";
import addReviewButton from "./addReviewButton";
import config from "./config";
import watchUrlChange from "./libs/watchUrlChange";

const executeReview = async () => {
    Review();
    const $submitButton = $("div.bottomDiv button.submitBtn")
    $submitButton.val("评价完成，点击提交评价");
    if (config.autoSubmit) {
        $submitButton.trigger("click");
        alert("评价完成，已自动提交。")
    }
};

const main = () => {
    const href = window.location.href;
    if (!href.includes(config.reviewHref)) return;

    addReviewButton(executeReview);
};

const observer = (func) => {
    const observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                const $topContent = $('div.contentItem div.topContent');
                if ($topContent.length) {
                    observer.disconnect();
                    func();
                    break; // 找到目标元素后立即跳出循环
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

$(async () => {
    observer(main);
    watchUrlChange((newUrl) => {
        console.log('URL 变化了:', newUrl);
        // 重新执行 main 函数
        observer(main);
    });
});
