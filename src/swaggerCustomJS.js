// manipulate dom to inject a video element

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const el = document.createElement('div');
el.style.width = '90%';
el.style.margin = 'auto';
el.innerHTML = `
<iframe src="https://www.youtube.com/embed/8BXNwnxaVQE" class="explanation-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`;

setTimeout(() => {
  const referenceNode = document.querySelector('.scheme-container');
  insertAfter(el, referenceNode);
}, 3000);

document.body.appendChild(el);
