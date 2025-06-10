/*
 * @Author: ZHANGCHAO
 * @Date: 2025-06-09 00:52:38
 * @LastEditors: ZHANGCHAO
 * @LastEditTime: 2025-06-09 14:31:08
 * @FilePath: \AI-APIs\js\api-test.js
 */
// API基础配置
// 自动判断环境，本地测试时使用完整的API地址，线上环境使用相对路径
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const API_BASE_URL = isLocal ? "http://124.128.244.171:8000/api" : "/api";
const SECRET_KEY =
  "5a8a7b07becf6fa4cd4db280f2979a1a7e5f20b18b6e99a86a8d8748f124d0d0";

// MD5加密函数
function md5(string) {
  function md5cycle(x, k) {
    var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }
  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function md51(s) {
    var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    tail[i >> 2] |= 0x80 << (i % 4 << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i++) tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }
  function md5blk(s) {
    var md5blks = [],
      i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }
  var hex_chr = "0123456789abcdef".split("");
  function rhex(n) {
    var s = "",
      j = 0;
    for (; j < 4; j++)
      s += hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
    return s;
  }
  function hex(x) {
    for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]);
    return x.join("");
  }
  function add32(a, b) {
    return (a + b) & 0xffffffff;
  }
  return hex(md51(string));
}

// 获取当前时间戳（格式：yyyy-MM-dd HH:mm:ss）
function getCurrentTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 生成鉴权请求头
function getAuthHeaders() {
  const timestamp = getCurrentTimestamp();
  const sign = md5(SECRET_KEY + timestamp).toUpperCase();
  return {
    timestamp: timestamp,
    sign: sign,
  };
}

// 通用API调用函数
async function callAPI(endpoint, formData, method = "POST") {
  try {
    const authHeaders = getAuthHeaders();
    const headers = {
      timestamp: authHeaders.timestamp,
      sign: authHeaders.sign,
      'x-vercel-skip-middleware': '1',
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: method,
      mode: 'cors',
      headers: headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 带超时的API调用函数
async function callAPIWithTimeout(endpoint, formData, timeout = 7200000, method = "POST") {
  try {
    const authHeaders = getAuthHeaders();
    const headers = {
      timestamp: authHeaders.timestamp,
      sign: authHeaders.sign,
      'x-vercel-skip-middleware': '1',
    };

    // 创建超时Promise
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`请求超时 (${timeout/1000}秒)。这可能是因为AI模型处理时间较长，请稍后重试。`));
      }, timeout);
    });

    // 创建请求Promise
    const fetchPromise = fetch(`${API_BASE_URL}${endpoint}`, {
      method: method,
      mode: 'cors',
      headers: headers,
      body: formData,
    });

    // 使用Promise.race来实现超时控制
    const response = await Promise.race([fetchPromise, timeoutPromise]);

    if (!response.ok) {
      if (response.status === 502) {
        throw new Error(`服务器网关错误 (502)。这通常是因为处理时间过长导致的。建议：\n1. 减少输入文本长度\n2. 简化申报要素拆分规则\n3. 稍后重试`);
      }
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 复制到剪贴板的函数
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // 使用现代的 Clipboard API
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopySuccess();
      })
      .catch((err) => {
        console.error("复制失败:", err);
        fallbackCopyTextToClipboard(text);
      });
  } else {
    // 降级方案
    fallbackCopyTextToClipboard(text);
  }
}

// 降级复制方案
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    showCopySuccess();
  } catch (err) {
    console.error("复制失败:", err);
    alert("复制失败，请手动选择文本进行复制");
  }

  document.body.removeChild(textArea);
}

// 显示复制成功提示
function showCopySuccess() {
  // 创建提示元素
  const toast = document.createElement("div");
  toast.textContent = "复制成功！";
  toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transition: opacity 0.3s ease;
    `;

  document.body.appendChild(toast);

  // 3秒后移除提示
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// 显示结果的通用函数
function displayResult(containerId, result) {
  const container = document.getElementById(containerId);
  const resultContent = container.querySelector(".result-content");

  let resultText = "";
  if (result.success) {
    resultContent.className = "result-content";
    resultText = JSON.stringify(result.data, null, 2);
    resultContent.textContent = resultText;
  } else {
    resultContent.className = "result-content error";
    resultText = `错误: ${result.error}`;
    resultContent.textContent = resultText;
  }

  // 添加复制按钮
  let copyButton = container.querySelector(".copy-button");
  if (!copyButton) {
    copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "复制结果";
    copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #007bff;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            z-index: 100;
        `;

    // 添加悬停效果
    copyButton.addEventListener("mouseenter", () => {
      copyButton.style.background = "#0056b3";
    });
    copyButton.addEventListener("mouseleave", () => {
      copyButton.style.background = "#007bff";
    });

    container.style.position = "relative";
    container.appendChild(copyButton);
  }

  // 更新复制按钮的点击事件
  copyButton.onclick = () => copyToClipboard(resultText);

  container.style.display = "block";
}

// 显示加载状态
function showLoading(containerId) {
  const container = document.getElementById(containerId);
  const resultContent = container.querySelector(".result-content");

  resultContent.className = "result-content loading";
  resultContent.textContent = "正在处理请求，请稍候...";
  container.style.display = "block";
}

// 显示带超时提示的加载状态
function showLoadingWithTimeout(containerId, timeout = 7200000) {
  const container = document.getElementById(containerId);
  const resultContent = container.querySelector(".result-content");

  resultContent.className = "result-content loading";
  resultContent.textContent = `正在处理请求，请稍候...

注意：此请求可能需要较长时间（最多${timeout/1000}秒），请耐心等待。`;
  container.style.display = "block";
}

// 文件上传测试
async function testUpload() {
  const form = document.getElementById("uploadForm");
  const formData = new FormData(form);
  const resultContainerId = "uploadResult";

  // 检查是否选择了文件
  const fileInput = document.getElementById("files");
  if (fileInput.files.length === 0) {
    alert("请选择至少一个文件");
    return;
  }

  showLoadingWithTimeout(resultContainerId);

  try {
    // 为 upload 单独处理URL，因为它不遵循 /api 的前缀规则
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const uploadUrl = isLocal ? 'http://124.128.244.171:8000/upload' : '/upload';

    const authHeaders = getAuthHeaders();
    const headers = {
      'timestamp': authHeaders.timestamp,
      'sign': authHeaders.sign,
      'x-vercel-skip-middleware': '1',
    };

    const timeout = 7200000; // 2小时超时
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`请求超时 (${timeout / 1000}秒)。这可能是因为AI模型处理时间较长，请稍后重试。`));
      }, timeout);
    });

    const fetchPromise = fetch(uploadUrl, {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: formData,
    });

    const response = await Promise.race([fetchPromise, timeoutPromise]);

    if (!response.ok) {
      if (response.status === 502) {
        throw new Error(`服务器网关错误 (502)。这通常是因为处理时间过长导致的。建议：\n1. 减少上传文件的大小或数量\n2. 检查服务器状态\n3. 稍后重试`);
      }
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }

    const resultData = await response.json();
    displayResult(resultContainerId, { success: true, data: resultData });

  } catch (error) {
    displayResult(resultContainerId, { success: false, error: error.message });
  }
}

// 申报要素智能填写测试
async function testSmartFill() {
  const resultContainerId = "smartFillResult";

  try {
    // 从表单获取数据
    const text = document.getElementById("text").value.trim();
    const splitRules = document.getElementById("split_rules").value.trim();
    const sbysRequired = document.getElementById("sbysRequired").value.trim();

    // 验证必填字段
    if (!text || !splitRules || !sbysRequired) {
      alert("请填写所有必填字段");
      return;
    }

    // 验证sbysRequired格式
    if (!/^[01]+$/.test(sbysRequired)) {
      alert("申报要素必填项标识只能包含数字0和1");
      return;
    }

    showLoadingWithTimeout(resultContainerId);

    // 准备JSON请求体
    const requestBody = {
      text: text,
      split_rules: splitRules,
      sbysRequired: sbysRequired
    };

    const endpoint = "/extract_and_fill";
    const url = `${API_BASE_URL}${endpoint}`;
    const authHeaders = getAuthHeaders();
    const headers = {
      'Content-Type': 'application/json',
      'timestamp': authHeaders.timestamp,
      'sign': authHeaders.sign,
      'x-vercel-skip-middleware': '1'
    };

    // 发送带超时的fetch请求
    const timeout = 7200000; // 2小时超时
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`请求超时 (${timeout / 1000}秒)。`));
      }, timeout);
    });

    const fetchPromise = fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: JSON.stringify(requestBody), // 将JS对象转换为JSON字符串
    });

    const response = await Promise.race([fetchPromise, timeoutPromise]);

    if (!response.ok) {
      throw new Error(`HTTP错误! 状态: ${response.status}`);
    }

    const resultData = await response.json();
    displayResult(resultContainerId, { success: true, data: resultData });

  } catch (error) {
    displayResult(resultContainerId, { success: false, error: error.message });
  }
}

// 文档逻辑校验测试
async function testVerify() {
  const form = document.getElementById("verifyForm");
  const formData = new FormData(form);
  const resultContainerId = "verifyResult";

  // 验证必填字段
  const text = document.getElementById("verifyText").value.trim();
  if (!text) {
    alert("请填写文档内容");
    return;
  }

  showLoadingWithTimeout(resultContainerId);

  try {
    const endpoint = "/verify";
    const result = await callAPIWithTimeout(endpoint, formData, resultContainerId);
    displayResult(resultContainerId, result);
  } catch (error) {
    displayResult(resultContainerId, { success: false, error: error.message });
  }
}

// 文件拖拽上传功能
function setupFileDragDrop() {
  const fileInput = document.getElementById("files");
  const fileInputWrapper = document.querySelector(".file-input-wrapper");

  if (!fileInput || !fileInputWrapper) return;

  // 防止默认拖拽行为
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    fileInputWrapper.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  // 高亮拖拽区域
  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputWrapper.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    fileInputWrapper.addEventListener(eventName, unhighlight, false);
  });

  // 处理文件拖拽
  fileInputWrapper.addEventListener("drop", handleDrop, false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e) {
    fileInputWrapper.classList.add("highlight");
  }

  function unhighlight(e) {
    fileInputWrapper.classList.remove("highlight");
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    fileInput.files = files;
    updateFileInputDisplay();
  }
}

// 更新文件输入显示
function updateFileInputDisplay() {
  const fileInput = document.getElementById("files");
  const fileInputDisplay = document.querySelector(".file-input");

  if (!fileInput || !fileInputDisplay) return;

  if (fileInput.files.length > 0) {
    const fileNames = Array.from(fileInput.files)
      .map((file) => file.name)
      .join(", ");
    fileInputDisplay.textContent = `已选择 ${fileInput.files.length} 个文件: ${fileNames}`;
  } else {
    fileInputDisplay.textContent = "点击选择文件或拖拽文件到此处";
  }
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
  // 设置文件拖拽功能
  setupFileDragDrop();

  // 监听文件输入变化
  const fileInput = document.getElementById("files");
  if (fileInput) {
    fileInput.addEventListener("change", updateFileInputDisplay);
  }

  // 为表单添加回车提交功能
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        const submitBtn = form.querySelector(
          'button[type="submit"], .btn-primary'
        );
        if (submitBtn) {
          submitBtn.click();
        }
      }
    });
  });
});

// 添加CSS样式用于拖拽高亮
const style = document.createElement("style");
style.textContent = `
    .file-input-wrapper.highlight .file-input {
        background: #e3f2fd !important;
        border-color: #1976d2 !important;
        transform: scale(1.02);
    }
`;
document.head.appendChild(style);
