// chạy file bypass.js khi chuột phải vào trang web https://sv.iuh.edu.vn và chọn bypass phiếu khảo sát
chrome.contextMenus.create({
    id: 'bypass',
    title: "Bypass phiếu khảo sát",
    contexts: ["all"],
    documentUrlPatterns: ["https://sv.iuh.edu.vn/*"]
});

//chạy bypass.js khi click vào bypass phiếu khảo sát
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "bypass") {
        chrome.tabs.executeScript(tab.id, { file: "bypass.js" });
    }
}
);


