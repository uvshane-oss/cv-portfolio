// This demo renders locally. No image-generation API, form submission or storage is used.
(() => {
  const canvas = document.getElementById("memorial-canvas");
  const ctx = canvas.getContext("2d");
  const form = document.getElementById("design-form");
  const status = document.getElementById("preview-status");
  const imagePaths = {
    headstone: "./assets/demo-headstone.webp",
    plaque: "./assets/demo-plaque.webp"
  };
  const images = {};
  let type = "headstone";
  let hasOverflow = false;

  for (const [key, path] of Object.entries(imagePaths)) {
    const img = new Image();
    img.onload = render;
    img.onerror = () => {
      status.textContent = "The preview image could not load. Please refresh and try again.";
    };
    img.src = path;
    images[key] = img;
  }

  function values() {
    return {
      name: document.getElementById("demo-name").value,
      dates: document.getElementById("demo-dates").value,
      message: document.getElementById("demo-message").value,
      font: document.getElementById("demo-font").value,
      colour: document.getElementById("demo-colour").value
    };
  }

  function font(size, family) {
    return `${size}px ${family === "classic" ? "Georgia, 'Times New Roman', serif" : "Arial, Helvetica, sans-serif"}`;
  }

  function fitSize(text, initial, maxWidth, family, minimum = 25) {
    let size = initial;
    while (size > minimum) {
      ctx.font = font(size, family);
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 2;
    }
    return size;
  }

  function drawText(text, y, initial, maxWidth, family, colour) {
    const size = fitSize(text, initial, maxWidth, family);
    ctx.font = font(size, family);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = colour;
    ctx.shadowColor = "#080c0cb8";
    ctx.shadowBlur = 2;
    ctx.fillText(text, 627, y, maxWidth);
    ctx.shadowBlur = 0;
  }

  function wrappedLines(text, width, size, family) {
    ctx.font = font(size, family);
    const lines = [];
    for (const paragraph of text.split("\n")) {
      if (!paragraph.trim()) {
        lines.push("");
        continue;
      }
      let current = "";
      for (const word of paragraph.trim().split(/\s+/)) {
        const candidate = current ? current + " " + word : word;
        if (current && ctx.measureText(candidate).width > width) {
          lines.push(current);
          current = word;
        } else {
          current = candidate;
        }
      }
      lines.push(current);
    }
    return lines;
  }

  function render() {
    const img = images[type];
    if (!img || !img.complete || !img.naturalWidth) return;
    const v = values();
    const plaque = type === "plaque";
    const ink = v.colour === "white" ? "#f4f2e9" : "#e7ca88";
    const width = plaque ? 870 : 670;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    drawText(v.name || "Your name here", plaque ? 425 : 410, plaque ? 68 : 66, width, v.font, ink);
    drawText(v.dates || "Dates or years", plaque ? 535 : 527, 40, width, v.font, ink);

    const ruleY = plaque ? 617 : 615;
    ctx.strokeStyle = ink;
    ctx.lineWidth = 2;
    ctx.globalAlpha = .8;
    ctx.beginPath();
    ctx.moveTo(500, ruleY);
    ctx.lineTo(754, ruleY);
    ctx.stroke();
    ctx.globalAlpha = 1;

    const message = v.message || "A message to remember them by";
    let size = plaque ? 43 : 39;
    let lines = wrappedLines(message, width, size, v.font);
    while ((lines.length > 6 || lines.some(line => {
      ctx.font = font(size, v.font);
      return ctx.measureText(line).width > width;
    })) && size > 24) {
      size -= 2;
      lines = wrappedLines(message, width, size, v.font);
    }
    hasOverflow = lines.length > 7;
    const lineHeight = size * 1.22;
    const firstY = (plaque ? 755 : 737) - ((lines.length - 1) * lineHeight / 2);
    if (!hasOverflow) {
      lines.forEach((line, index) => drawText(line, firstY + index * lineHeight, size, width, v.font, ink));
    }

    ctx.fillStyle = "#142022d9";
    ctx.fillRect(0, 1150, 1254, 104);
    ctx.font = "24px Arial, Helvetica, sans-serif";
    ctx.fillStyle = "#e9dfc7";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("DESIGN IDEA  •  NOT A FINAL ENGRAVING PROOF", 627, 1202);
    canvas.setAttribute("aria-label", `Representative ${plaque ? "plaque" : "headstone"} preview showing ${v.name || "a sample name"}, ${v.dates || "sample dates"}, and ${v.message || "a sample message"}.`);
    document.getElementById("download-design").disabled = hasOverflow;
    status.textContent = hasOverflow
      ? "This wording needs fewer lines to fit the preview. Please shorten the message."
      : "Your wording stays on this device. Download the image to keep it.";
  }

  document.querySelectorAll("[data-demo-type]").forEach(button => button.addEventListener("click", () => {
    type = button.dataset.demoType;
    document.querySelectorAll("[data-demo-type]").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("demo-style-label").textContent = type === "plaque" ? "Bronze memorial plaque" : "Black granite headstone";
    render();
  }));

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("reset", () => {
    requestAnimationFrame(() => {
      type = "headstone";
      document.querySelector('[data-demo-type="headstone"]').click();
      status.textContent = "Your wording stays on this device. Download the image to keep it.";
    });
  });

  document.getElementById("download-design").addEventListener("click", () => {
    if (!images[type].naturalWidth) {
      status.textContent = "Please wait for the preview image to load.";
      return;
    }
    render();
    canvas.toBlob(blob => {
      if (!blob) {
        status.textContent = "Could not prepare the image. Please try again.";
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `maiden-stone-${type}-design-idea.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
      status.textContent = "Draft image downloaded. The final design and inscription should be reviewed with Maiden Stone.";
    }, "image/png");
  });
})();
