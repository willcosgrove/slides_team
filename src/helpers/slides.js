export function parseSlides(text) {
  let slides = text.trim().split("\n\n")
  slides = slides.map(slide => slide.replace("\n", "<br />"))
  return ["", ...slides, ""]
}
