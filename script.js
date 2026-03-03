function login(department) {

  const webhookURL = "YOUR_WEBHOOK_URL";

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `🔐 ${department} Portal Accessed`
    })
  });

  if (department === "LEO") {
    window.location.href = "leo.html";
  }

  if (department === "Fire") {
    window.location.href = "fire.html";
  }

  if (department === "DOT") {
    window.location.href = "dot.html";
  }
}
