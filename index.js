let globalDes = null;

fetch("./design.json")
  .then((response) => response.json())
  .then((design) => {
    unlayer.init({
      id: "editor",
      projectId: 261345,
      apiKey:
        "sgF1dmSuOEQjAXydfoF5HgMJNvXsvYr0QmaTyLXyF5ZzzthAYvr0UpJBjUanpueD",
    });

    unlayer.loadDesign(design);
    globalDes = design;
  })
  .catch((error) => console.error("Error loading JSON:", error));

document.getElementById("export-json").addEventListener("click", () => {
  let url = "https://api.unlayer.com/v2/export/image";

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic dWDIUYLdMpYjnmmjfGL0PsattfbdpfxJxgawcROleFVAPt9AF5SSxiostPI0aU8v",
    },
    body: JSON.stringify({
      displayMode: "email",
      globalDes,
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
});
