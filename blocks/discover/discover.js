import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const headingParagraph = el.querySelector("p");
  const heading = headingParagraph?.textContent;
  if (heading) {
    headingParagraph.remove();
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    const headingTag = createTag('h2', { class: 'discover-title' }, `${heading}`);
    el.prepend(headingTag);
  }
  const buttonList = el.querySelector("ul");
  if (buttonList && buttonList.querySelectorAll("li").length > 0) {
    const { decorateButtons } = await import(`${getLibs()}/utils/decorate.js`);
    decorateButtons(buttonList);
  }
}
