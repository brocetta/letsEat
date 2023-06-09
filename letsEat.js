const text = function (text, classList, tag, where) {
  const h1 = document.createElement(tag);
  h1.classList.add(classList);
  h1.innerHTML = text;
  where.appendChild(h1);
};

function image(src, classList, where) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add(classList);
  where.appendChild(img);
}

function curvedText(textInner, where) {
  // Create the SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "200");
  svg.setAttribute("height", "50");
  svg.style.backgroundColor = "transparent";

  // Create the path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("id", "curve");
  path.setAttribute("d", "M10 50 A 80 80 1 0 1 150 150");
  path.setAttribute("fill", "transparent");
  path.setAttribute("stroke", "transparent");
  svg.appendChild(path);

  // Create the text element
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  // Create the textPath element
  const textPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "textPath"
  );
  textPath.setAttribute("href", "#curve");
  textPath.setAttribute("startOffset", "0px");
  textPath.setAttribute("fill", "white");
  textPath.style.textTransform = "uppercase";
  textPath.style.fontWeight = "bold";
  textPath.textContent = textInner;

  // Append the textPath to the text element
  text.appendChild(textPath);

  // Append the text element to the SVG
  svg.appendChild(text);

  // Append the SVG to the document body
  where.appendChild(svg);
}

// Creating Logo
image("media/let_s_eat_white.png", "logo", document.body);
// Creating Heading
text("Let's Eat Food", "heading", "h1", document.body);

// Creating Menu Element
function menu(src, heading, text1, text2, text3, text4) {
  const container = document.createElement("div");
  container.classList.add("breakfast");
  document.body.append(container);

  curvedText(heading, container);

  const content = document.createElement("div");
  content.classList.add("breakfastContent");
  container.append(content);

  image(src, "breakfastImg", container);

  text(text1, "contentText", "h3", content);
  text(text2, "contentText", "h3", content);
  text(text3, "contentText", "h3", content);
  text(text4, "contentText", "h3", content);
}

// Calling Menu elements functions
menu(
  "media/avocadoSalsa.jpg",
  "Doručak",
  "- Jaja sa avokadom i paradajzom na pirinčanim galetama ...500RSD",
  "- Ovsene palačinke sa prelivom od banane i kakaoa ...500RSD",
  "- Hlebići sa semenkama u celom zrnu, sa humusom, paradajzom i maslinama ...500RSD",
  ""
);
menu(
  "media/Soup.jpg",
  "Ručak",
  "Posluženo sa domaćim hlebićima",
  "- Punjene paprike sa mirođijom ...700RSD",
  "- Pasulj bez mesa, kuvan sa kolenicom ...500RSD",
  "- Slatki kuvani kupus sa piletinom ...500RSD"
);

menu(
  "media/smoothie.jpg",
  "I još...",
  "- Frape banana i bademovo mleko ...400RSD",
  "- Smoothie Banana i Borovnice ...500RSD",
  "- Lešnikovo mleko sa medom ...4000RSD",
  ""
);
