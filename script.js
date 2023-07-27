window.onload = function () {
  const btn = document.getElementById("btn");
  const wrapper = document.getElementById("wrapper");
  const nav = document.getElementById("nav");

  const htm = document.getElementsByTagName("html");

  btn.onclick = function (e) {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      wrapper.classList.remove("active");
      nav.classList.remove("active");
      htm.classList.remove("active");
    } else {
      btn.classList.add("active");
      wrapper.classList.add("active");
      nav.classList.add("active");
      htm.classList.add("active");
    }
  };
};
