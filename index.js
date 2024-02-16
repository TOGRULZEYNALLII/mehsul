const namee = document.getElementById("name");
const sirname = document.getElementById("sirname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const button = document.getElementById("button");

const jobaddress = document.getElementById("jobaddress");
const homeaddress = document.getElementById("homeaddress");

const kuryer = document.getElementById("kuryer");
const unvandan = document.getElementById("unvandan");

const kartla = document.getElementById("kartla");
const nagd = document.getElementById("nagd");

const select = document.getElementById("select");

const rengmavi = document.getElementById("mavi");
const rengqirmizi = document.getElementById("qirmizi");
const rengsilver = document.getElementById("silver");

const silver = document.getElementById("silver");
const qirmizi = document.getElementById("red");
const goy = document.getElementById("blue");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const namevalue = document.createElement("li");
  namevalue.innerHTML = namee.value;
  const text = document.createElement("h4");
  text.textContent = "ad";
  ul.appendChild(namevalue);
  ul.appendChild(text);
  const sirnamevalue = document.createElement("li");
  sirnamevalue.textContent = sirname.value;
  ul.appendChild(sirnamevalue);
  const text2 = document.createElement("h4");
  text2.textContent = "soyad";
  ul.appendChild(text2);
  const emailresult = document.createElement("li");
  emailresult.textContent = email.value;
  ul.appendChild(emailresult);
  const text3 = document.createElement("h4");
  text3.textContent = "email";
  ul.appendChild(text3);
  const addressresult = document.createElement("li");
  addressresult.textContent = address.value;
  ul.appendChild(addressresult);
  const text4 = document.createElement("h4");
  text4.textContent = "unvan";
  ul.appendChild(text4);

  const jobaddress2 = document.createElement("li");
  if (jobaddress.checked) {
    jobaddress2.textContent = jobaddress.value;
    ul.appendChild(jobaddress2);
  } else {
    jobaddress2.textContent = homeaddress.value;
    ul.appendChild(jobaddress2);
  }

  const catdirilma = document.createElement("li");
  if (kuryer.checked) {
    catdirilma.textContent = kuryer.value;
    ul.appendChild(catdirilma);
  } else {
    catdirilma.textContent = unvandan.value;
    ul.appendChild(catdirilma);
  }

  const odenisusulu = document.createElement("li");
  if (kartla.checked) {
    odenisusulu.textContent = kartla.value;
    ul.appendChild(odenisusulu);
  } else {
    odenisusulu.textContent = nagd.value;
    ul.appendChild(odenisusulu);
  }

  const cities = document.createElement("li");
  cities.textContent = select.value;
  ul.appendChild(cities);

  const rengler = document.createElement("li");
  if (rengmavi.checked) {
    rengler.textContent = rengmavi.value;
    ul.appendChild(rengler);
  } else if (rengqirmizi.checked) {
    rengler.textContent = rengqirmizi.value;
    ul.appendChild(rengler);
  } else {
    rengler.textContent = rengsilver.value;
    ul.appendChild(rengler);
  }
});

const mainimg = document.querySelector("#mainimg");
const thumbs = document.querySelector("#image img");
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", (event) => {
    event.preventDefault();
    mainimg.src = event.target.src;
    const rengs = document.createElement("li");
    rengs.textContent = mainimg.value;
    ul.appendChild(rengs);
  });
});
