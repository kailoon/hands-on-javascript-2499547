import Card from './Card'

const cardListItem = (imgData) => {
  return `
    <li className="carlist__item">
      ${Card(imgData)}
    </li>
  `
}

const Cardlist = (data) => {
  return `
    <section class="cardlist">
      <ul className="cardlist__list">
        ${data.map((imgData) => cardListItem(imgData)).join("")}
      </ul>
    </section>
  `
}

export default Cardlist