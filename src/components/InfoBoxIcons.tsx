import { InfoBoxList } from "../data/InfoBoxData"

const InfoBoxIcons = () => {
  return (
    <ul className="infobox-icons icon-list">
          {InfoBoxList.map((item) => (
            <li className="infobox-icon list-icon" key={item.id}>
              {item.icon}{" "}
              {item.link ? (
                <a href={item.link} target="_blank" className="infobox-link">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
  )
}

export default InfoBoxIcons